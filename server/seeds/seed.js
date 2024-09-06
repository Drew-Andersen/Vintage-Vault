const db = require("../config/connection");
const { User, Item } = require("../models");
const userSeeds = require("./userSeeds.json");
const itemSeeds = require("./itemSeeds.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  try {
    // Clean the Item and User collections
    await cleanDB("Item", "items");
    await cleanDB("User", "users");

    // Seed the items first
    const createdItems = await Item.create(itemSeeds);

    // Get all item IDs
    const itemIds = createdItems.map(item => item._id);

    // Assign random items to each user before seeding them
    const usersWithItems = userSeeds.map(user => {
      // Randomly select between 1 and 5 items for each user
      const randomItemCount = Math.floor(Math.random() * 5) + 1;
      const randomItems = [];

      for (let i = 0; i < randomItemCount; i++) {
        const randomIndex = Math.floor(Math.random() * itemIds.length);
        randomItems.push(itemIds[randomIndex]);
      }

      // Assign the random items to the user
      return {
        ...user,
        items: randomItems,
      };
    });

    // Seed the users with the assigned items
    await User.create(usersWithItems);
    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("All done!");
  process.exit(0);
});

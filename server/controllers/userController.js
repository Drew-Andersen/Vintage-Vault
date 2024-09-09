const User = require('../models/User');

module.exports = {
  async getUsers(req, res,) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
        const user = await User.findById(req.user._id); 
  
        if (user) {
          res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
          });
        } else {
          res.status(404).json({ message: 'User not found' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Server error during fetching profile' });
      }
    },
  // create a new user
  async createUser(req, res) {
    try {
        const user = await User.create({
            username,
            email,
            password, 
          });
        const userExists = await User.findOne({ email });
          if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
          }
    } 
        res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id), // JWT token for future requests
        });
        catch (error) {
        res.status(500).json({ message: 'Server error during registration' });
    }
  },

//   const getUserProfile = async (req, res) => {
//     try {
//       const user = await User.findById(req.user._id); // req.user is set by protect middleware
  
//       if (user) {
//         res.json({
//           _id: user._id,
//           username: user.username,
//           email: user.email,
//         });
//       } else {
//         res.status(404).json({ message: 'User not found' });
//       }
//     } catch (error) {
//       res.status(500).json({ message: 'Server error during fetching profile' });
//     }
//   };
// };

// const registerUser = async (req, res) => {
//     const { username, email, password } = req.body;
  
//     try {
//       // Check if the user already exists
//       const userExists = await User.findOne({ email });
//       if (userExists) {
//         return res.status(400).json({ message: 'User already exists' });
//       }
  
//       // Create a new user
//       const user = await User.create({
//         username,
//         email,
//         password, // Password will be hashed in the model (pre-save hook)
//       });
  
//       // Respond with the new user info and JWT token
//       res.status(201).json({
//         _id: user._id,
//         username: user.username,
//         email: user.email,
//         token: generateToken(user._id), // JWT token for future requests
//       });
//     } catch (error) {
//       res.status(500).json({ message: 'Server error during registration' });
//     }
//   };
  
  // @desc    Authenticate user & get token
  // @route   POST /api/auth/login
  // @access  Public
  const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if user exists
      const user = await User.findOne({ email });
      
      // Check if password matches
      if (user && (await user.matchPassword(password))) {
        res.json({
          _id: user._id,
          username: user.username,
          email: user.email,
          token: generateToken(user._id), // Generate a new JWT
        });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server error during login' });
    }
  };
  
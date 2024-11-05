// Imports
const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
// Multer
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images')
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Data.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage });

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/upload', upload.single('imageURL'), (req, res) => {
    res.send('Image Uploaded!');
})


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
}

app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => console.log(`Now listening on localhost:${PORT}`));
})
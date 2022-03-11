const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const products = require('./Router/products/products');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

let gfs;

dotenv.config();

app.use(express.json());

app.use(cors());

app.use('/products', products);

const port = process.env.PORT || 8000;

mongoose.connect("mongodb://localhost:27017/my_japan", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const conn = mongoose.connection;


conn.on('error', () => {
    console.log("error connecting in mongodb database")
    process.exit(84);
})

conn.once("open", () => {
    console.log('succes in connecting to mongo db database')
});

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen(port, () => console.log(`app listen in port ${port}`))


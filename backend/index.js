const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const products = require('./Router/products/products');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();

app.use(express.json());

app.use(cors());

const port = process.env.PORT || 8000;

const uri = process.env.URI

if (!uri)
    process.exit(84)
console.log(uri)


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch((error) => {
    console.log('error in connction mongoose')
    console.error(error)
    process.exit(84);
});

const conn = mongoose.connection;

conn.on('error', () => {
    console.log("error connecting in mongodb database")
    process.exit(84);
})


conn.once("open", () => {
    console.log('succes in connecting to mongo db database')
});


app.use('/products', products);

app.get('/', (req, res) => {
    res.send("API RUNNING");
})

app.listen(port, () => console.log(`app listen in port ${port}`))


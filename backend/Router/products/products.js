const express = require('express')
const router = express.Router()
const Shema_products = require('../../Shema/Shema_products')

router
.get('/', async (req, res) => {
    const products = await Shema_products.find({});

    try {
        res.status(200).json({data: products});
    } catch (error) {
        console.error(error)
        res.status(500).send('error get data');
    }
})
.get('/:id', async (req, res) => {

    try {
        console.log("id requested: " + req.params.id);
        const products = await Shema_products.findOne({"_id": req.params.id});
        res.status(200).json({data: products});
    } catch (error) {
        console.error(error)
        res.status(500).send('error get data');
    }
})
.post('/insert', async (req, res) => {
    const product = new Shema_products(add_new_product(req.body));

    try {
        await product.save();
        res.redirect(req.body.url);
    } catch (err) {
        console.error(err)
        res.status(500).send(err);
    }
})

function add_new_product(obj)
{
    if (obj == null) return

    return {
        name: obj.name,
        image: obj.image,
        price: obj.price,
        option: obj.option,
        Description: obj.Description,
        link: obj.link
    }
}

module.exports = router;
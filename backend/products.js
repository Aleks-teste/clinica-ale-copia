const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

// Cadastrar produto
router.post('/', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send({ error: 'Erro ao cadastrar produto.' });
    }
});

// Listar produtos
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({ error: 'Erro ao buscar produtos.' });
    }
});

module.exports = router;

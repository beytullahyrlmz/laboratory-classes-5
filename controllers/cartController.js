const Cart = require('../models/cart');

exports.addProductToCart = (req, res) => {
  const { name } = req.body;

  try {
    Cart.add(name);
    res.redirect('/products/new');
  } catch (err) {
    res.status(404).send('Product not found');
  }
};

exports.getProductsCount = (req, res) => {
  res.json({ count: Cart.getProductsQuantity() });
};

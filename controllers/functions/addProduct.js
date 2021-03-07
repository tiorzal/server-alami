const { Product } = require('../../models')

module.exports = async (req, res, next) => {
  const payload = {
    SellerId: req.body.SELLER_ID,
    name: req.body.NAMA,
    unit: req.body.SATUAN,
    price: req.body.HARGA_SATUAN
  }

  console.log(payload);
  try {
    const product = await Product.create(payload)

    res.status(201).json({ PRODUCT_ID: product.id})
    
    
  } catch (error) {
    next(error)    
  }
}
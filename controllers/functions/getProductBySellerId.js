const { Product } = require('../../models')
module.exports = async (req,res,next) => {
  const payload = {
    SellerId: req.body.SELLER_ID
  }

  try {
    const products = await Product.findAll({ where: payload})
    console.log(products);
    res.status(200).json({ products })
  } catch (error) {
    console.log(error);
    next(error)
  }
}
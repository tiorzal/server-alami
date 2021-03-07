const { Product } = require('../../models')
module.exports = async (req,res,next) => {
  console.log(req.params.id)
  const payload = {
    SellerId: +req.params.id
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
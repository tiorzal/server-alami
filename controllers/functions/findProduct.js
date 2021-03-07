const { Product } = require('../../models')
const { Op } = require('sequelize')
module.exports = async (req, res, next) => {
  const payload = {
    key_word: req.body.KEY_WORD
  }
  try {
    const products = await Product.findAll({
      where: {
        name: {
          [Op.like]: `%${payload.key_word}%`
        }
      }
    })
    console.log(products);
    res.status(200).json({ products })
  } catch (error) {
    next(error)
  }
}
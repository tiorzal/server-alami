const { Product } = require('../../models')
const { Op } = require('sequelize')
module.exports = async (req, res, next) => {
  const payload = {
    key_word: req.params.key_word
  }
  try {
    const products = await Product.findAll({
      where: {
        name: {
          [Op.iLike]: `%${payload.key_word}%`
        }
      }
    })
    res.status(200).json({ products })
  } catch (error) {
    next(error)
  }
}
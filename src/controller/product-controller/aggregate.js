const models = require("../../model/product-model/product");
const productUser = models.productSchemas;

const getAggregate = async (res) => {
  try {
    const productAggregate = await productUser.aggregate([
      { $match: { rating: { $gte: 4.5 } } },
      {
        $group: {
          _id: "$releaseYear",
          avgRating: { $avg: "$ratings" },
          avgPrice: { $avg: "$price" },
          minPrice: { $avg: "$price" },
          maxPrice: { $avg: "$price" },
          priceTotal: { $sum: "$price" },
        },
      },
      { $sort: { minPrice: 1 } },
    ]);
    res.status(200).send(productAggregate);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = getAggregate;

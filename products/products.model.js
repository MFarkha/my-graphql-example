const products = [
  {
    id: "redshoe",
    description: "Red shoes",
    price: 42.12,
    reviews: [],
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 99.99,
    reviews: [],
  },
];

const getAllProducts = () => {
  return products;
};

const getProductsByPrice = (minPrice, maxPrice) => {
  return products.filter((product) => {
    return product.price >= minPrice && product.price <= maxPrice;
  });
};

const getProductById = (id) => {
  return products.find((product) => {
    return product.id === id;
  });
};

const addNewProduct = (id, description, price) => {
  const newProduct = {
    id,
    description,
    price,
    reviews: [],
  };
  products.push(newProduct);
  return newProduct;
};

const addNewProductReview = (id, rating, comment) => {
  const matchedProduct = getProductById(id);
  if (matchedProduct) {
    const newReview = {
      rating,
      comment,
    };
    matchedProduct.reviews.push(newReview);
    return newReview;
  }
};

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};

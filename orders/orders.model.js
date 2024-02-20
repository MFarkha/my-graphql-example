const orders = [
  {
    date: "2020-10-10",
    subtotal: 82.2,
    items: [
      {
        product: {
          id: "redshoe",
          description: "Red shoes",
          price: 41.1,
        },
        quantity: 2,
      },
    ],
  },
];

const getAllOrders = () => {
  return orders;
};

module.exports = {
  getAllOrders,
};

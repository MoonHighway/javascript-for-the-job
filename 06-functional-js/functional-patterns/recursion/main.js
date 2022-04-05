const outfit = [
  { name: "Cool Hat", price: 20 },
  { name: "Cool Tee Shirt", price: 25 },
  {
    category: "Accessories",
    inventory: [
      {
        name: "Cool Sunglasses",
        price: 150,
      },
      {
        name: "Cool Watch",
        price: 400,
      },
      {
        category: "Jewelry",
        inventory: [
          {
            name: "Cool Earrings",
            price: 25,
          },
          {
            name: "Cool bracelet",
            price: 40,
          },
          {
            name: "Cool Necklace",
            price: 80,
          },
        ],
      },
      {
        name: "shorts",
        price: 42,
      },
      {
        name: "flip flops",
        price: 22,
      },
    ],
  },
];

function outfitCost(outfit) {
  return outfit.reduce((total, item) => {
    if (item.inventory) {
      return outfitCost(item.inventory) + total;
    }
    return total + item.price;
  }, 0);
}

console.log(outfitCost(outfit));

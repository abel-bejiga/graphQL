import crypto from "crypto";

class Product {
  constructor(id, { name, description, price, soldout, inventory, stores }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.soldout = soldout;
    this.inventory = inventory;
    this.stores = stores;
  }
}

const productDatabase = {};

export const resolvers = {
  product: () => {
    return {
      id: 2342323,
      name: "Abe",
      description: "Learning graphQL",
      price: 34.99,
      soldout: false,
      stores: [
        { store: "Pasadena" },
        { store: "Los Angeles" },
        { store: "New York" },
      ],
    };
  },
  createProduct: ({ input }) => {
    let id = crypto.randomBytes(10).toString("hex");
    productDatabase[id] = input;
    return new Product(id, input);
  },
  getProducts: ({ id }) => {
    return productDatabase[id];
  },
  updateProduct: ({ id, input }) => {
    productDatabase[id] = input;
    return new Product(id, input);
  },
  deleteProduct: ({ id }) => {
    const product = productDatabase[id];
    delete productDatabase[id];
    return product;
  },
};

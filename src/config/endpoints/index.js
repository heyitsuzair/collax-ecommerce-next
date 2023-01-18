const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:1337/";
export const Endpoints = {
  // Products
  getProducts: BASE_URL + "api/products?populate=*",
};

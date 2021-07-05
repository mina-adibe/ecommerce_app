import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL;

export function getProducts() {
  return fetch("https://fakestoreapi.com/products")
    .then(handleResponse)
    .catch(handleError);
}

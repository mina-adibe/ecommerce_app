import { handleResponse, handleError } from "./apiUtils";
//const baseUrl = process.env.API_URL;

export function getProducts() {
  //return fetch("https://fakestoreapi.com/products")
  return fetch(
    "https://us-central1-shopping-cart-ff20c.cloudfunctions.net/user"
  )
    .then(handleResponse)
    .catch(handleError);
}

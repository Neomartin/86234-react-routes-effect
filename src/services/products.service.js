import axios from "axios";

const API_URL = "https://fakestoreapi.com";

export async function getProducts() {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
}

import axios from "axios";

const API_URL = "https://api.johnlawrimore.com/store/products";

const HEADERS = {
  Authorization: "dharris",
};

export async function getProductById(id) {
  const response = await axios.get(`${API_URL}/${id}`, {
    headers: HEADERS,
  });

  return response.data;
}

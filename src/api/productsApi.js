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

export async function getProducts() {
  try {
    const response = await axios.get(`${API_URL}/`, {
      headers: HEADERS,
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error.message || new Error("Could not get product list");
  }
}

export async function addReview(productId, review) {
  const response = await axios.post(`${API_URL}/${productId}/reviews`, review, {
    headers: HEADERS,
  });

  return response.data;
}

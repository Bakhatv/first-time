import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://raw.githubusercontent.com/shaikhov-i/pizza-house/master/public/db.json",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json"
  },
});

export default {
  async getPizzas() {
    let response = await apiClient.get("");
    let result = await response.data.pizzas;
    return result;
  }
};
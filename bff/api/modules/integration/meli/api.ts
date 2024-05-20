import Axios from "axios";

export const meliApi = Axios.create({
  baseURL: "https://api.mercadolibre.com",
});

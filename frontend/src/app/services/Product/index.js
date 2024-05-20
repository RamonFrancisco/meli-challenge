import api from "../api";

export default class ProductServices {
  static async searchProducts({ query }) {
    const response = await api(`/api/items?search=${query}`, {
      next: {
        revalidate: 60 * 60,
      },
    });

    if (!response.ok) {
      throw new Error("Não foi encontrado dados para a busca");
    }

    const products = await response.json();
    return products;
  }

  static async getProduct({ id }) {
    const response = await api(`/api/items/${id}`, {
      next: {
        revalidate: 60 * 60,
      },
    });

    if (!response.ok) {
      throw new Error("Produto não encontrado");
    }

    const product = await response.json();
    return product;
  }
}


import type { Product, ProductsResponse } from '../types/Product';

const API_URL = '/data/produtos.json';

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`Erro ao carregar produtos: ${response.status}`);
  }

  const data: ProductsResponse = await response.json();

  if (!data.success || !Array.isArray(data.products)) {
    throw new Error('Resposta inválida dos produtos');
  }

  return data.products;
}

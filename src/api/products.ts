import { delay } from "@/lib/utils";
import products from "@/mocks/products.json";
import { ProductItem } from "@/lib/types";

export const fetchProductsMock = async (): Promise<ProductItem[]> => {
  await delay(5200);

  return products;
};

export const fetchProductMock = async (
  id: number,
): Promise<ProductItem | undefined> => {
  await delay(5200);

  return products.find((i) => i.id === id);
};

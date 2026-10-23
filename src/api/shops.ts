import { delay } from "@/lib/utils";
import shops from "@/mocks/shops.json";
import { ShopItem } from "@/lib/types";

export const fetchShopFavoriteMock = async (): Promise<ShopItem[]> => {
  await delay(5200);

  return shops;
};

export const fetchShopMock = async (): Promise<ShopItem[]> => {
  await delay(5200);
  return shops;
};

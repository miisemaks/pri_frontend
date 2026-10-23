import { SVGAttributes } from "react";

export type UserRole = "buyer" | "seller" | "director";

export interface ProductItem {
  id: number;
  title: string;
  count: number | null;
  measurement: string; //"1 л";
  price: number;
  image: string | null;
  images: string[];
  description: string | null;
}

export interface ShopItem {
  id: number;
  title: string;
  description: string;
  rating: number | null;
  address: string;
  distance: number | null;
  image: string | null;
}

/**
 * @param {className} для цвета используй text-...
 */
export interface IconProps {
  size?: number;
  className?: SVGAttributes<SVGSVGElement>["className"];
}

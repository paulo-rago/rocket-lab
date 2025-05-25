import type { Product } from "./Products";

export interface CartItem extends Product {
  quantity: number;
}

export interface ProductCart {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: number;
  color: string;
  quantity: number;
}

export interface HomeProps {
  cart: ProductCart[];
  setCart: React.Dispatch<React.SetStateAction<ProductCart[]>>;
}
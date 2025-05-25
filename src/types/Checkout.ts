import type { ProductCart } from './Cart';

export interface CheckoutProps {
  cart: ProductCart[];
  setCart: React.Dispatch<React.SetStateAction<ProductCart[]>>;
}

export interface CheckoutForm {
  name: string;
  email: string;
  country: string;
  city: string;
  phone: string;
  company: string;
  vat: string;
  voucher: string;
}

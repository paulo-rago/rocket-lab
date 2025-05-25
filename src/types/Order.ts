import type { ProductCart } from './Cart';
import type { CheckoutForm } from './Checkout';

export interface Order {
  id: string;
  date: string;
  items: ProductCart[];
  customer: CheckoutForm;
  total: number;
  status: 'Pendente' | 'Pago' | 'Cancelado';
}

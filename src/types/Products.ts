export interface Product {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: number;
  color: string;
  rating: number;
  reviewCount: number;
  sizes: Array<{
    name: string;
    inStock: boolean;
  }>;
}

export interface ProductInfoProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  product: Product;
  onAdd: (product: Product) => void;
}

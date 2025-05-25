import React from 'react';
import { Button } from './Button';
import type { Product } from '../../types/Products';

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
  onShowDetails: (product: Product) => void;
}

export const ProductCard = React.memo(function ProductCard({
  product,
  onAdd,
  onShowDetails,
}: ProductCardProps) {
  return (
    <div className="group relative">
      <div
        className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 cursor-pointer"
        onClick={() => onShowDetails(product)}
      >
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover group-hover:opacity-75"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">R$ {product.price}</p>
      </div>
      <Button
        onClick={() => onAdd(product)}
        className="mt-2 w-full"
        variant="primary"
      >
        Adicionar ao Carrinho
      </Button>
    </div>
  );
});
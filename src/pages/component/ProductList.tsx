import { useState } from 'react';
import { ProductInfo } from './ProductInfo';
import { ProductCard } from './ProductCard';
import type { Product } from '../../types/Products';

interface Props {
  products: Product[];
  onAdd: (product: Product) => void;
}

export function ProductList({ products, onAdd }: Props) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl font-bold text-gray-900">Nossos Produtos</h2>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={onAdd}
                onShowDetails={setSelectedProduct}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedProduct && (
        <ProductInfo
          open={selectedProduct !== null}
          setOpen={() => setSelectedProduct(null)}
          product={selectedProduct}
          onAdd={onAdd}
        />
      )}
    </>
  );
}

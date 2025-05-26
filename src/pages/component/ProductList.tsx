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
      <section className="linear-gradient(45deg, #ffffff, #f5f5f5, #e0e0e0, #cccccc, #b3b3b3); py-20 min-h-[80vh]">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2 text-center tracking-tight drop-shadow-lg">Nossos Produtos</h2>
          <p className="text-lg text-gray-500 mb-10 text-center">Escolha o melhor para você!</p>

          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div className="transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
                <ProductCard
                  key={product.id}
                  product={product}
                  onAdd={onAdd}
                  onShowDetails={setSelectedProduct}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

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

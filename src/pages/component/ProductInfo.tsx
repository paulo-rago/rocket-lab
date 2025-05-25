import { Dialog, DialogPanel, DialogTitle, Radio, RadioGroup } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { Button } from './Button';
import type { ProductInfoProps } from '../../types/Products';


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function ProductInfo({ open, setOpen, product, onAdd }: ProductInfoProps) {
  const [selectedColor] = useState(product.color);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      {/* Overlay with opacity */}
      <div className="fixed inset-0 bg-black/50 transition-opacity" />
      <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="rounded-xl w-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between">
                  <DialogTitle className="text-2xl font-bold text-gray-900">
                    {product.name}
                  </DialogTitle>
                  <Button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-500" variant="secondary">
                    <XMarkIcon className="h-6 w-6" />
                  </Button>
                </div>

                <p className="text-2xl text-gray-900">{product.price}</p>

                <div className="mt-4 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                        'h-5 w-5'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                  <p className="ml-2 text-sm text-gray-500">({product.reviewCount} reviews)</p>
                </div>

                <form className="mt-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Cor</h4>
                    <div className="flex gap-3">
                      <span
                        className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                        style={{ backgroundColor: selectedColor }}
                      >
                        <span className="sr-only">{selectedColor}</span>
                      </span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Tamanho</h4>
                    <RadioGroup value={selectedSize} onChange={setSelectedSize} className="grid grid-cols-4 gap-3">
                      {product.sizes.map((size) => (
                        <Radio
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ checked }) =>
                            classNames(
                              size.inStock
                                ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                : 'cursor-not-allowed bg-gray-50 text-gray-200',
                              checked ? 'ring-2 ring-indigo-500' : '',
                              'flex items-center justify-center rounded-md border border-gray-300 px-3 py-2 text-sm font-medium uppercase'
                            )
                          }
                        >
                          <span>{size.name}</span>
                        </Radio>
                      ))}
                    </RadioGroup>
                  </div>

                  <Button
                    type="button"
                    className="mt-6 w-full"
                    variant="primary"
                    onClick={() => {
                      onAdd({
                        ...product,
                        color: selectedColor,
                        sizes: [selectedSize],
                      });
                      setOpen(false);
                    }}
                  >
                    Adicionar ao carrinho
                  </Button>
                </form>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

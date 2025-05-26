
import { Dialog, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import type { ProductCart } from '../../types/Cart';
import { Button } from './Button';
import { Alert } from './Alert';
import { useNavigate } from 'react-router-dom';

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  cart: ProductCart[];
  onRemove: (id: number) => void;
}

export function ShoppingCart({ open, setOpen, cart, onRemove }: Props) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const navigate = useNavigate();

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">Carrinho</DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <Button
                        onClick={() => setOpen(false)}
                        variant="secondary"
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        aria-label="Fechar carrinho"
                      >
                        <XMarkIcon className="h-6 w-6" />
                      </Button>
                    </div>
                  </div>

                  <div className="mt-8">
                    {cart.length === 0 ? (
                      <Alert type="info" message="Seu carrinho está vazio." />
                    ) : (
                      <div className="flow-root">
                        <ul className="-my-6 divide-y divide-gray-200">
                          {cart.map((product) => (
                            <li key={product.id} className="flex py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  src={product.imageSrc}
                                  alt={product.imageAlt}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>{product.name}</h3>
                                    <p className="ml-4">R$ {product.price.toFixed(2)}</p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className="text-gray-500">Qtd: {product.quantity}</p>

                                  <div className="flex">
                                    <Button
                                      onClick={() => onRemove(product.id)}
                                      variant="danger"
                                      className="font-medium"
                                    >
                                      Remover
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>R$ {subtotal.toFixed(2)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Frete e impostos calculados no checkout.</p>
                  {subtotal === 0 && (
                    <div className="mt-6">
                      <Alert type="warning" message="Você não tem produtos no carrinho" />
                    </div>
                  )}
                  <div className="mt-6">
                    <Button
                      onClick={() => {
                        if (subtotal === 0) return;
                        setOpen(false);
                        navigate('/checkout');
                      }}
                      variant="primary"
                      className="flex items-center justify-center w-full"
                      disabled={subtotal === 0}
                    >
                      Finalizar compra
                    </Button>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      ou{' '}
                      <Button
                        onClick={() => setOpen(false)}
                        variant="secondary"
                        className="font-medium ml-1"
                      >
                        Continuar comprando <span aria-hidden="true"> &rarr;</span>
                      </Button>
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

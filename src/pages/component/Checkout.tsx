import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

import type { CheckoutProps } from '../../types/Checkout';

export const Checkout = ({ cart = [], setCart }: CheckoutProps) => {
  const [form, setForm] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvc: '',
    installments: '',
  });
  const navigate = useNavigate();



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCart([]); // Clear the cart
    navigate('/', { state: { paymentSuccess: true } });
  };

  const subtotal = cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);

  return (
    <section className="bg-white py-8 md:py-16">
      <form onSubmit={handleSubmit} className="mx-auto max-w-screen-xl px-4">


        <div className="mt-6 lg:flex lg:items-start lg:gap-12">
          {/* Payment Form */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Pagamento</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-900">
                    Número do Cartão
                  </label>
                  <input
                    name="cardNumber"
                    value={form.cardNumber}
                    onChange={handleChange}
                    required
                    maxLength={19}
                    placeholder="0000 0000 0000 0000"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="cardName" className="block text-sm font-medium text-gray-900">
                    Nome no Cartão
                  </label>
                  <input
                    name="cardName"
                    value={form.cardName}
                    onChange={handleChange}
                    required
                    placeholder="Como está no cartão"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="expiry" className="block text-sm font-medium text-gray-900">
                    Validade
                  </label>
                  <input
                    name="expiry"
                    value={form.expiry}
                    onChange={handleChange}
                    required
                    maxLength={5}
                    placeholder="MM/AA"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="cvc" className="block text-sm font-medium text-gray-900">
                    CVC
                  </label>
                  <input
                    name="cvc"
                    value={form.cvc}
                    onChange={handleChange}
                    required
                    maxLength={4}
                    placeholder="123"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="installments" className="block text-sm font-medium text-gray-900">
                    Parcelas
                  </label>
                  <select
                    name="installments"
                    value={form.installments}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
                  >
                    <option value="">Selecione</option>
                    <option value="1">1x sem juros</option>
                    <option value="2">2x sem juros</option>
                    <option value="3">3x sem juros</option>
                    <option value="4">4x sem juros</option>
                    <option value="5">5x sem juros</option>
                    <option value="6">6x sem juros</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Resumo do Pedido */}
          <div className="mt-6 w-full space-y-6 lg:mt-0 lg:max-w-xs">
            <div className="border border-gray-200 rounded-lg p-4">
              <dl className="flex items-center justify-between py-3">
                <dt className="text-base font-normal text-gray-500">Subtotal</dt>
                <dd className="text-base font-medium text-gray-900">R$ {subtotal.toFixed(2)}</dd>
              </dl>
              <dl className="flex items-center justify-between py-3">
                <dt className="text-base font-bold text-gray-900">Total</dt>
                <dd className="text-base font-bold text-gray-900">R$ {subtotal.toFixed(2)}</dd>
              </dl>
            </div>
            <Button type="submit" className="w-full" variant="primary">
              Finalizar Pedido
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
};

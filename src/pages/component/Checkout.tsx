import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

import type { CheckoutProps } from '../../types/Checkout';

export const Checkout = ({ cart = [] }: CheckoutProps) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvc: '',
    installments: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const [showAlert, setShowAlert] = useState(false);
  const [formWarning, setFormWarning] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.cardNumber || !form.cardName || !form.expiry || !form.cvc || !form.installments) {
      setFormWarning('Por favor, preencha todos os campos obrigatórios.');
      setShowAlert(false);
      return;
    }

    setFormWarning(null);

    const newOrder = {
      id: crypto.randomUUID(),
      date: new Date().toLocaleString(),
      items: cart,
      customer: form,
      total: subtotal,
      status: 'Pendente',
    };

    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    const updatedOrders = [...existingOrders, newOrder];
    localStorage.setItem('orders', JSON.stringify(updatedOrders));

    setShowAlert(true);
    setTimeout(() => {
      navigate('/orders');
    }, 1200);
  };

  const subtotal = cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);

  return (
    <section className="py-8 md:py-16 min-h-screen flex items-center justify-center" style={{ backgroundColor: '#d6d5c9' }}>
      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-4xl w-full flex flex-col md:flex-row gap-10 border border-gray-200">
        {/* Payment Form Card */}
        <div className="flex-1 flex flex-col justify-center">
          {formWarning && (
            <div className="mb-4 p-3 rounded-lg bg-yellow-100 text-yellow-800 border border-yellow-300">
              {formWarning}
            </div>
          )}
          {showAlert && (
            <div className="mb-4 p-3 rounded-lg bg-green-100 text-green-800 border border-green-300">
              Pedido realizado com sucesso!
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Pagamento</h2>
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
            <Button type="submit" className="w-full mt-4" variant="primary">
              Finalizar Pedido
            </Button>
          </form>
        </div>

        <div className="w-full md:max-w-xs flex flex-col justify-center">
          <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50 shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resumo do Pedido</h3>
            <dl className="flex items-center justify-between py-3">
              <dt className="text-base font-normal text-gray-500">Subtotal</dt>
              <dd className="text-base font-medium text-gray-900">R$ {subtotal.toFixed(2)}</dd>
            </dl>
            <dl className="flex items-center justify-between py-3 border-t border-gray-200">
              <dt className="text-base font-bold text-gray-900">Total</dt>
              <dd className="text-base font-bold text-gray-900">R$ {subtotal.toFixed(2)}</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

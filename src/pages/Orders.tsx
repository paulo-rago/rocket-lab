import { useEffect, useState } from 'react';
import type { Order } from '../types/Order';
import Layout from './component/Layout';

export const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(savedOrders);
  }, []);

  return (
    <Layout>
      <section className="min-h-[70vh] bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-extrabold text-green-900 mb-8 text-center tracking-tight drop-shadow-lg">Meus Pedidos</h1>
          {orders.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16">
              <p className="text-gray-500 text-lg">Nenhum pedido encontrado.</p>
            </div>
          ) : (
            <div className="grid gap-8">
              {orders.map((order) => (
                <div key={order.id} className="border border-green-100 rounded-2xl p-6 shadow-lg bg-white/80 hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div>
                      <p className="text-lg font-bold text-green-900">Pedido: <span className="font-mono">{order.id}</span></p>
                      <p className="text-sm text-gray-500">Data: {order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-extrabold text-emerald-700 drop-shadow">R$ {order.total.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="font-semibold text-gray-800 mb-1">Itens:</p>
                    <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
                      {order.items.map((item) => (
                        <li key={item.id}>
                          <span className="font-medium">{item.name}</span> <span className="text-gray-500">- {item.quantity}x</span> <span className="text-green-900 font-semibold">R$ {item.price.toFixed(2)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

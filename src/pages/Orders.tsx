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
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Meus Pedidos</h1>
        {orders.length === 0 ? (
          <p className="text-gray-500">Nenhum pedido encontrado.</p>
        ) : (
          <div className="grid gap-4">
            {orders.map((order) => (
              <div key={order.id} className="border rounded-lg p-4 shadow">
                <div className="flex justify-between">
                  <div>
                    <p className="text-lg font-semibold">Pedido: {order.id}</p>
                    <p className="text-sm text-gray-500">Data: {order.date}</p>
                    <p className="text-sm text-gray-500">Status: {order.status}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-emerald-600">R$ {order.total.toFixed(2)}</p>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="font-semibold">Itens:</p>
                  <ul className="list-disc ml-5 text-sm">
                    {order.items.map((item) => (
                      <li key={item.id}>
                        {item.name} - {item.quantity}x - R$ {item.price.toFixed(2)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Alert } from './component/Alert';
import { ProductList } from './component/ProductList';
import { ShoppingCart } from './component/ShoppingCart';
import { products } from '../types/productsData';
import type { Product } from '../types/Products';
import Layout from './component/Layout';
import Gallery from './component/Gallery';
import type { HomeProps } from '../types/Cart.ts';
import { Button } from './component/Button';

function Home({ cart, setCart }: HomeProps) {
  const [open, setOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showPaymentAlert, setShowPaymentAlert] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.paymentSuccess) {
      setShowPaymentAlert(true);
      // Remove the state so the alert doesn't show again on refresh
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [location.state]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setShowAlert(true);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Layout>
      {showAlert && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md">
          <Alert
            type="success"
            message="Produto adicionado ao carrinho!"
            closable
            onClose={() => setShowAlert(false)}
          />
        </div>
      )}
      {showPaymentAlert && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md">
          <Alert
            type="success"
            message="Pagamento realizado com sucesso!"
            closable
            onClose={() => setShowPaymentAlert(false)}
          />
        </div>
      )}
      <header className="flex justify-between p-4">
        <Button
    onClick={() => setOpen(true)}
    variant="primary"
  >
    Carrinho ({cart.reduce((sum, item) => sum + item.quantity, 0)})
      </Button>
      </header>
      <Gallery />
      <ProductList products={products} onAdd={addToCart} />
      <ShoppingCart open={open} setOpen={setOpen} cart={cart} onRemove={removeFromCart} />
    </Layout>
  );
}

export default Home;

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Checkout } from './pages/component/Checkout';
import { Orders } from './pages/Orders';
import type { ProductCart } from './types/Cart';

function App() {
  const [cart, setCart] = useState<ProductCart[]>([]);

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

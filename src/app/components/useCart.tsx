import { useState } from 'react';
import { useEffect } from 'react';
// Define types
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

const UseCart = () => {
  const [cart, setCart] = useState<Product[]>([]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return { cart, addToCart, removeFromCart, clearCart, total };
};

export default UseCart;

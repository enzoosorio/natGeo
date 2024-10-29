import React from 'react';
import { Compass, ShoppingCart, Menu } from 'lucide-react';
import { Link } from './Link';
import { useCart } from '../context/CartContext';
import { CartDrawer } from './CartDrawer';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const { state } = useCart();

  const itemCount = state.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <nav className="bg-green-50 fixed w-full z-40 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Compass className="h-8 w-8 text-green-700" />
                <span className="ml-2 text-xl font-bold text-green-900">NatGeo</span>
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link href="/" className="text-green-900 hover:text-green-700">Inicio</Link>
                <Link href="/products" className="text-green-900 hover:text-green-700">Productos</Link>
                <Link href="/contact" className="text-green-900 hover:text-green-700">Contacto</Link>
                <button 
                  className="text-green-900 hover:text-green-700 relative"
                  onClick={() => setIsCartOpen(true)}
                >
                  <ShoppingCart className="h-6 w-6" />
                  {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-green-900 hover:text-green-700"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-50">
              <Link href="/" className="block px-3 py-2 text-green-900 hover:text-green-700">Inicio</Link>
              <Link href="/products" className="block px-3 py-2 text-green-900 hover:text-green-700">Productos</Link>
              <Link href="/contact" className="block px-3 py-2 text-green-900 hover:text-green-700">Contacto</Link>
            </div>
          </div>
        )}
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
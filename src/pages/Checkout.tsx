import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/product';
import { ShoppingBag, Tag, Truck } from 'lucide-react';
import toast from 'react-hot-toast';

export function Checkout() {
  const { state } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  
  const hasItems = state.items.length > 0;
  const shippingCost = hasItems ? 5.00 : 0;
  const discount = couponApplied ? 5.00 : 0; // $5 discount for HOLA5 coupon
  const finalTotal = state.total + shippingCost - discount;

  // Get 3 random products for recommendations
  const recommendedProducts = [...products]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const applyCoupon = () => {
    if (couponCode === 'HOLA5' && !couponApplied) {
      setCouponApplied(true);
      toast.success('¡Cupón aplicado exitosamente! $5 de descuento');
    } else if (couponApplied) {
      toast.error('Ya has aplicado un cupón');
    } else {
      toast.error('Código de cupón inválido');
    }
  };

  return (
    <div className="min-h-screen bg-green-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-green-900 mb-8">Finalizar Compra</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Resumen del Pedido
              </h2>
              {state.items.length === 0 ? (
                <p className="text-center text-gray-500 py-8">Tu carrito está vacío</p>
              ) : (
                state.items.map((item) => (
                  <div key={item.id} className="flex items-center py-4 border-b">
                    <img src={item.images[0]} alt={item.title} className="w-16 h-16 object-cover rounded" />
                    <div className="ml-4 flex-1">
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-gray-600">Cantidad: {item.quantity}</p>
                    </div>
                    <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))
              )}
            </div>

            {/* Coupon */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Tag className="w-5 h-5 mr-2" />
                Cupón de Descuento
              </h2>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                  placeholder="Ingresa tu código"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  onClick={applyCoupon}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Aplicar
                </button>
              </div>
              {couponApplied && (
                <p className="text-green-600 mt-2">¡Cupón HOLA5 aplicado!</p>
              )}
            </div>
          </div>

          {/* Order Total */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Total del Pedido</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${state.total.toFixed(2)}</span>
                </div>
                {hasItems && (
                  <div className="flex justify-between items-center">
                    <span className="flex items-center">
                      <Truck className="w-4 h-4 mr-1" />
                      Envío:
                    </span>
                    <span>${shippingCost.toFixed(2)}</span>
                  </div>
                )}
                {couponApplied && (
                  <div className="flex justify-between text-green-600">
                    <span>Descuento:</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t pt-3">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <button
                className={`w-full py-3 rounded-lg mt-6 transition-colors ${
                  hasItems
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!hasItems}
              >
                Confirmar Pedido
              </button>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-green-900 mb-8">Productos Recomendados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
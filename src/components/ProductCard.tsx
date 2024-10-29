import { useCart } from '../context/CartContext';
import { Product } from '../types';

interface ProductCardProps extends Product {}

export function ProductCard({ id, title, price, image, description, category }: ProductCardProps) {
    const { dispatch } = useCart();
  
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-green-900">{title}</h3>
          <p className="text-sm text-gray-600 mt-2">{description}</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xl font-bold text-green-700">${price}</span>
            <button 
              onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { id, title, price, image, description, category } })}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    );
  }
  
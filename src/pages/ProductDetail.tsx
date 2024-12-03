import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { products } from '../data/product';
import { ProductCard } from '../components/ProductCard';
import { ShoppingCart, Star } from 'lucide-react';

interface ProductDetailProps {
  productId: number;
}

export function ProductDetail({ productId }: ProductDetailProps) {
  const { dispatch } = useCart();
  const product = products.find(p => p.id === productId);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-green-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-2xl font-bold text-red-600">Producto no encontrado</h1>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-green-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="space-y-4">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={product.images[selectedImage]}
                  alt={product.title}
                  className="w-full h-[500px] object-cover rounded-lg"
                />
              </div>
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-24 h-24 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-green-600' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} - Vista ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-green-900">{product.title}</h1>
              <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-green-700">
                  ${product.price}
                </span>
                <button
                  onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
                  className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Añadir al Carrito</span>
                </button>
              </div>
              <div className="border-t pt-6">
                <h2 className="text-xl font-semibold mb-4">Detalles del Producto</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Categoría: {product.category}</li>
                  <li>100% Orgánico</li>
                  <li>Calidad Premium</li>
                  <li>Envío Rápido</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-green-900 mb-6">Opiniones de Clientes</h2>
          <div className="space-y-6">
            {product.reviews.map((review) => (
              <div key={review.id} className="border-b pb-6">
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-2xl">{review.avatar}</span>
                  <div>
                    <h3 className="font-semibold">{review.user}</h3>
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mt-2">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-green-900 mb-8">Productos Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
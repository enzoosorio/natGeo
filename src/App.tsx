import { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Products } from './pages/Products';
import { Contact } from './pages/Contact';
import { Checkout } from './pages/Checkout';
import { ProductDetail } from './pages/ProductDetail';
import { Link } from './components/Link';
import { ProductCard } from './components/ProductCard';
import { Carousel } from './components/Carousel';
import { Leaf, Send, Phone } from 'lucide-react';
import { products } from './data/product';
import { Toaster } from 'react-hot-toast';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentProductId, setCurrentProductId] = useState<number | null>(null);

  useEffect(() => {
    const handleNavigation = (event: Event) => {
      const path = (event as CustomEvent).detail as string;
      const productMatch = path.match(/\/product\/(\d+)/);
      
      if (productMatch) {
        setCurrentPage('product');
        setCurrentProductId(parseInt(productMatch[1], 10));
      } else {
        setCurrentPage(path.replace('/', '') || 'home');
        setCurrentProductId(null);
      }
    };

    window.addEventListener('navigation', handleNavigation);
    
    const initialPath = window.location.pathname;
    const productMatch = initialPath.match(/\/product\/(\d+)/);
    
    if (productMatch) {
      setCurrentPage('product');
      setCurrentProductId(parseInt(productMatch[1], 10));
    } else {
      setCurrentPage(initialPath.replace('/', '') || 'home');
    }

    return () => {
      window.removeEventListener('navigation', handleNavigation);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'products':
        return <Products />;
      case 'contact':
        return <Contact />;
      case 'checkout':
        return <Checkout />;
      case 'product':
        return currentProductId ? <ProductDetail productId={currentProductId} /> : null;
      default:
        return (
          <>
            <Carousel />

            <div className="w-full">
              <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-green-900">Quiénes Somos</h2>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="p-6">
                        <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">100% Orgánico</h3>
                        <p className="text-gray-600">Todos nuestros productos son cultivados sin pesticidas ni químicos dañinos.</p>
                      </div>
                      <div className="p-6">
                        <Send className="h-12 w-12 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Envío Sostenible</h3>
                        <p className="text-gray-600">Utilizamos empaques biodegradables y prácticas de envío eco-amigables.</p>
                      </div>
                      <div className="p-6">
                        <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Soporte 24/7</h3>
                        <p className="text-gray-600">Estamos aquí para ayudarte en cualquier momento que nos necesites.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="py-12 bg-green-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-bold text-green-900 text-center mb-12">Productos Destacados</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.slice(0, 3).map((product) => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>
                  <div className="text-center mt-12">
                    <Link
                      href="/products"
                      className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Ver todos los productos
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </>
        );
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-green-50">
        <Navbar />
        <main className="w-full">
          {renderPage()}
        </main>
        
        <footer className="bg-green-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">NatGeo Orgánicos</h3>
                <p className="text-green-100">Productos naturales para una vida mejor</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contacto</h3>
                <p className="text-green-100">Email: info@natgeo.com</p>
                <p className="text-green-100">Tel: (123) 456-7890</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-green-100 hover:text-white">Instagram</a>
                  <a href="#" className="text-green-100 hover:text-white">Facebook</a>
                  <a href="#" className="text-green-100 hover:text-white">Twitter</a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-green-800 text-center">
              <p className="text-green-100">&copy; 2024 NatGeo Orgánicos. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
        <Toaster position="top-right" />
      </div>
    </CartProvider>
  );
}
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { products } from '../data/products';
import { Link } from './Link';

export function ProductCarousel() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="aspect-[21/9]"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Link href={`/product/${product.id}`}>
              <div className="relative w-full h-full">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{product.title}</h2>
                    <p className="text-xl md:text-2xl">${product.price}</p>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
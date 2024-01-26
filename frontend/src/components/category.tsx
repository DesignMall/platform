import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/css/bundle';

export default function Category() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ delay: 0.5 }}
        style={{
            padding: '50px',
            position:'absolute',
          transform: 'translate(-50%, -50%)',
          zIndex: 1000,
        }}
      >
        <div
          className="bg-white p-6 rounded-md shadow-md"
          style={{
            backdropFilter: 'blur(5px)',
          }}
        >

          {/* Swiper component */}
          <div className="text-center">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide>Football</SwiperSlide>
              <SwiperSlide>BasketBall</SwiperSlide>
              <SwiperSlide>Tennis</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </motion.div>
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 999, // Lower z-index than the modal
        }}
      />
    </>
  );
}

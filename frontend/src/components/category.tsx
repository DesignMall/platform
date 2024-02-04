import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import football from '../assets/football.png';
import basketball from '../assets/basketball.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useNavigate } from 'react-router-dom';

interface Props {
  onClose: () => void;
}

export default function Category(props: Props) {
  const { onClose } = props;

  const Navigate = useNavigate()

  return (
    <>
      <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-screen bg-slate-300 bg-opacity-40">
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-center p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Choose Your Favourite Sport al'batal(a)
              </h3>
            </div>
            <div className="p-6 md:p-10 space-y-4">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                <SwiperSlide>
                  <div className="p-5 flex justify-center" onClick={()=>Navigate('/sport/clubs')}>
                    <button className="w-52 hover:scale-125 hover:duration-300">
                      <img src={football} alt="Football" />
                    </button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-5 flex justify-center">
                    <button className="w-52 hover:scale-125 hover:duration-300">
                      <img src={basketball} alt="Basketball" />
                    </button>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="p-6 md:p-10 flex justify-center">
              <button
                className="bg-red-600 text-white rounded-xl p-4"
                onClick={() => onClose()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


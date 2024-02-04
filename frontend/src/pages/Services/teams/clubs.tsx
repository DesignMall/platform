import { BsChevronDoubleDown } from 'react-icons/bs'; // Import the required icon
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useNavigate } from 'react-router-dom';
export default function Clubs() {
    const Navigate = useNavigate()
    return (
        <>
            <div className=' p-6 flex text-center'>
                <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={4}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}>
                    <SwiperSlide>
                        <div className=' flex justify-center'>
                            <div className=" max-w-sm rounded-lg border-green-400 flex flex-col border p-8 font-bold items-center hover:cursor-pointer hover:scale-110 hover:bg-green-400 hover:text-white hover:duration-500" onClick={()=>Navigate('/sport/PlayerChoice')}>
                                <h1 className='text-green-400 animate-bounce'><BsChevronDoubleDown /></h1>
                                <h1>Barcelona</h1>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' flex justify-center'>
                            <div className=" max-w-sm rounded-lg border-green-400 flex flex-col border p-8 font-bold items-center hover:cursor-pointer hover:scale-110 hover:bg-green-400 hover:text-white hover:duration-500">
                                <h1 className='text-green-400 animate-bounce'><BsChevronDoubleDown /></h1>
                                <h1>Real Madrid</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' flex justify-center'>
                            <div className=" max-w-sm rounded-lg border-green-400 flex flex-col border p-8 font-bold items-center hover:cursor-pointer hover:scale-110 hover:bg-green-400 hover:text-white hover:duration-500">
                                <h1 className='text-green-400 animate-bounce'><BsChevronDoubleDown /></h1>
                                <h1>Real Madrid</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' flex justify-center'>
                            <div className=" max-w-sm rounded-lg border-green-400 flex flex-col border p-8 font-bold items-center hover:cursor-pointer hover:scale-110 hover:bg-green-400 hover:text-white hover:duration-500">
                                <h1 className='text-green-400 animate-bounce'><BsChevronDoubleDown /></h1>
                                <h1>Real Madrid</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' flex justify-center'>
                            <div className=" max-w-sm rounded-lg border-green-400 flex flex-col border p-8 font-bold items-center hover:cursor-pointer hover:scale-110 hover:bg-green-400 hover:text-white hover:duration-500">
                                <h1 className='text-green-400 animate-bounce'><BsChevronDoubleDown /></h1>
                                <h1>Real Madrid</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}

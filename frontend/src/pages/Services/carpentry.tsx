import Header from "../../components/Header"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import Round from '../../assets/tables/round.png'
import Round_sec from '../../assets/tables/round_sec.png'
import Rectangular from '../../assets/tables/rectangular.png'
import Options from "../../components/Options";
import { OptionsCarp } from "../../utils/types";
export default function Carpentry() {
    const [TableOptions, setTable] = useState(true)


    const Table: OptionsCarp[] = [
        {
            name: 'Type',
            images: [Round, Round_sec, Rectangular]
        },
        {
            name: 'Legs',
            images: ['']
        },
        {
            name: 'Top',
            images: ['']
        },
        {
            name: 'Wheels',
            images: ['']
        }
    ]

    return <>
        <div className='flex flex-col gap-y-3'>
            <Header />
            <div className=" p-9">
                <div className=" flex flex-col gap-5">
                    <div>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={20}
                            slidesPerView={6}
                            navigation>
                            <SwiperSlide><div className=" flex gap-12"><div onClick={() => setTable(!TableOptions)} className="flex items-center"><NavLink className={({ isActive }) => `p-2 rounded-xl text-white hover:bg-orange-500 hover:duration-300 hover:cursor-pointer ${isActive ? ' bg-orange-500' : 'bg-green-500'}`} to={'/carpentry/table'}>Table</NavLink></div>
                                {TableOptions && <Options options={Table} />}
                            </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className=" border-2 border-green-500 rounded-2xl p-14 h-96 flex gap-3 justify-between">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    </>
}
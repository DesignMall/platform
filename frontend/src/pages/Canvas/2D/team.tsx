import { ChangeEvent, useState } from "react"
import Kit from "../../../components/Canvas/Kits"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { NameDimensions, NumberDimensions, Player } from "../../../utils/types"
import Slider from 'rc-slider';
import { HuePicker, ColorResult } from "react-color";
import 'rc-slider/assets/index.css';
import { hueToHex } from "../../../utils/helpers";
export default function PlayerChoice() {
    const [Display, setDisplay] = useState<Player>({ Player_Name: 'Choose a Name', Player_Number: '10' })

    const [Name_Dimensions, setNameDimension] = useState<NameDimensions>({ Xposition: -15, Yposition: 200, Size: 20 })

    const [Number_Dimensions, setNumberDimension] = useState<NumberDimensions>({ X: -15, Y: 250, size: 150 })

    const [Color, setColor] = useState<number | undefined>()

    const handleChange = (e: ChangeEvent<HTMLInputElement>, target: string) => {
        target === 'Name' ? setDisplay((prev) => ({
            ...prev,
            Player_Name: e.target.value
        })) : setDisplay((prev) => ({
            ...prev,
            Player_Number: e.target.value
        }))
    }

    const handleColorChange = (e: ColorResult) => {
        setColor(e.hsl.h)
    }

    const handleSize = (e: number | number[], target: string) => {
        const size = Array.isArray(e) ? e[0] : e;
        target === 'Name' ? setNameDimension((prev) => ({
            ...prev, Size: size
        })) : setNumberDimension((prev) => ({
            ...prev, size: size
        }))
    }

    const handleXposition = (e: number | number[], target: string) => {
        const x = Array.isArray(e) ? e[0] : e;
        target === 'Name' ? setNameDimension((prev) => ({
            ...prev, Xposition: x
        })) : setNumberDimension((prev) => ({
            ...prev, X: x
        }))
    }

    const handleYposition = (e: number | number[], target: string) => {
        const y = Array.isArray(e) ? e[0] : e;
        target === 'Name' ? setNameDimension((prev) => ({
            ...prev, Yposition: y
        })) : setNumberDimension((prev) => ({
            ...prev, Y: y
        }))
    }

    return <>
        <div className=" p-7">
            <div className=" flex gap-6 border-green-500 border-2 rounded-xl p-7 justify-center">
                <div className=" flex flex-col gap-9">
                    <div className=" text-center flex gap-3">
                        <input type="text" placeholder="Name" className=" p-2 border-green-500 rounded-xl border-2 focus:outline-red-400" onChange={(e) => handleChange(e, 'Name')} />
                        <input type="number" placeholder="number" className=" p-2 border-green-500 rounded-xl border-2   w-24" onChange={(e) => handleChange(e, 'Number')}></input>
                    </div>
                    <div>
                        <HuePicker onChange={handleColorChange} />
                    </div>
                    <div className="p-10 flex gap-7">
                        <div className=" flex gap-7">
                            <div className=" flex flex-col items-center gap-4">
                                <div>
                                    <h1 className=" text-2xl font-bold text-green-500">Name</h1>
                                </div>
                                <div className=" flex gap-5">
                                    <div className=" h-64">
                                        <Slider range min={0} max={100} vertical={true} onChange={(e) => handleSize(e, 'Name')} defaultValue={20} />
                                    </div>
                                    <div className=" h-64">
                                        <Slider range min={-100} max={100} vertical={true} onChange={(e) => handleXposition(e, 'Name')} defaultValue={-15} />
                                    </div>
                                    <div className=" h-64">
                                        <Slider range min={0} max={400} vertical={true} defaultValue={200} onChange={(e) => handleYposition(e, 'Name')} />
                                    </div>
                                    <div className=" h-64">
                                        <Slider range min={0} max={100} vertical={true} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" border h-96 border-orange-400"></div>
                            </div>
                            <div className=" flex flex-col items-center gap-4">
                                <div>
                                    <h1 className=" text-2xl font-bold text-green-500">Number</h1>
                                </div>
                                <div className=" flex gap-5">
                                    <div className=" h-64">
                                        <Slider range min={0} max={200} vertical={true} defaultValue={150} onChange={(e) => handleSize(e, 'Number')} />
                                    </div>
                                    <div className=" h-64">
                                        <Slider range min={-100} max={200} vertical={true} defaultValue={-15} onChange={(e) => handleXposition(e, 'Number')} />
                                    </div>
                                    <div className=" h-64">
                                        <Slider range min={0} max={400} vertical={true} defaultValue={250} onChange={(e) => handleYposition(e, 'Number')} />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div>
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={20}
                                slidesPerView={6}
                                direction="vertical"
                                navigation
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                                style={{ height: '400px' }}>
                                <SwiperSlide><button className=" bg-green-400 p-2 rounded-xl text-white hover:bg-orange-500 hover:duration-300 hover:cursor-pointer w-44" onClick={(e) => setDisplay({ Player_Name: e.currentTarget.innerText, Player_Number: '1' })}>Ter Stegen</button>
                                </SwiperSlide>
                                <SwiperSlide><button className=" bg-green-400 p-2 rounded-xl text-white hover:bg-orange-500 hover:duration-300 hover:cursor-pointer w-44" onClick={(e) => setDisplay({ Player_Name: e.currentTarget.innerText, Player_Number: '9' })}>Lewandowski</button>
                                </SwiperSlide>
                                <SwiperSlide><button className=" bg-green-400 p-2 rounded-xl text-white hover:bg-orange-500 hover:duration-300 hover:cursor-pointer w-44" onClick={(e) => setDisplay({ Player_Name: e.currentTarget.innerText, Player_Number: '24' })}>Kondé</button>
                                </SwiperSlide>

                                <SwiperSlide><button className=" bg-green-400 p-2 rounded-xl text-white hover:bg-orange-500 hover:duration-300 hover:cursor-pointer w-44" onClick={(e) => setDisplay({ Player_Name: e.currentTarget.innerText, Player_Number: '15' })}>Christensen</button>
                                </SwiperSlide>

                                <SwiperSlide><button className=" bg-green-400 p-2 rounded-xl text-white hover:bg-orange-500 hover:duration-300 hover:cursor-pointer w-44" onClick={(e) => setDisplay({ Player_Name: e.currentTarget.innerText, Player_Number: '9' })}>Kondé</button>
                                </SwiperSlide>

                                <SwiperSlide><button className=" bg-green-400 p-2 rounded-xl text-white hover:bg-orange-500 hover:duration-300 hover:cursor-pointer w-44" onClick={(e) => setDisplay({ Player_Name: e.currentTarget.innerText, Player_Number: '9' })}>Kondé</button>
                                </SwiperSlide>

                                <SwiperSlide><button className=" bg-green-400 p-2 rounded-xl text-white hover:bg-orange-500 hover:duration-300 hover:cursor-pointer w-44" onClick={(e) => setDisplay({ Player_Name: e.currentTarget.innerText, Player_Number: '9' })}>Kondé</button>
                                </SwiperSlide>

                                <SwiperSlide><button className=" bg-green-400 p-2 rounded-xl text-white hover:bg-orange-500 hover:duration-300 hover:cursor-pointer w-44" onClick={(e) => setDisplay({ Player_Name: e.currentTarget.innerText, Player_Number: '9' })}>Kondé</button>
                                </SwiperSlide>
                            </Swiper>
                        </div>

                    </div>
                </div>
                <div className=" border-green-500 rounded-2xl p-5">
                    <Kit Player={Display} Color={hueToHex(Color)} Name={Name_Dimensions} Number={Number_Dimensions} />
                </div>
            </div>
        </div>

    </>
}
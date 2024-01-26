import { BsChevronDoubleDown } from 'react-icons/bs';
import Clothes from '../assets/clothes.png'
import lufy from '../assets/lufy.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import TypewriterComponent from 'typewriter-effect';
import Header from '../components/Header';
import { useState } from 'react';
import Category from '../components/category';
export default function Services() {
    const Navigate = useNavigate()
    const [Modal, setModal] = useState(false)
    return <>
        <div className='flex flex-col h-screen gap-16'>
            <Header />
            {Modal && <Category />}
            <div className='flex flex-col gap-y-16'>
                <div className='flex justify-center w-screen font-extrabold text-2xl text-slate-500 animate-pulse'>
                    <TypewriterComponent onInit={(typewriter) => {
                        typewriter.typeString(`Transform Your Ideas to Reality`)
                            .pauseFor(3000)
                            .typeString(`Create Everything from Scratch`)
                            .changeDeleteSpeed(2)
                            .start()
                    }}></TypewriterComponent>
                </div>
                <div className=" ml-16">
                    <div className="flex flex-row flex-wrap h-screen gap-x-10 gap-y-10">
                        <div className=" max-w-sm rounded-lg border-green-400 flex flex-col max-h-max border p-8 font-bold items-center hover:cursor-pointer hover:scale-110 hover:bg-green-400 hover:text-white hover:duration-500" onClick={() => Navigate('/clothing')}>
                            <img src={Clothes} className='max-w-sm max-h-max'></img>
                            <h1 className='text-green-400 animate-bounc e'><BsChevronDoubleDown /></h1>
                            <h1>Fashion</h1>
                        </div>
                        <div className=" max-w-sm rounded-lg border-green-400 flex flex-col max-h-max border p-8 font-bold items-center hover:cursor-pointer hover:scale-110 hover:bg-green-400 hover:text-white hover:duration-500" onClick={() => setModal(true)}>
                            <img src={Clothes} className='max-w-sm max-h-max'></img>
                            <h1 className='text-green-400 animate-bounc e'><BsChevronDoubleDown /></h1>
                            <h1>Sport</h1>
                        </div>
                        <div className=" max-w-sm rounded-lg border-green-400 flex flex-col max-h-max border p-8 font-bold items-center hover:cursor-pointer hover:scale-110 hover:bg-green-400 hover:text-white hover:duration-500">
                            <img src={lufy} className='max-w-sm max-h-max'></img>
                            <h1 className='text-green-400 animate-bounce'><BsChevronDoubleDown /></h1>
                            <h1>Carpentry</h1>
                        </div>
                        <div className=" max-w-sm rounded-lg border-green-400 flex flex-col max-h-max border p-8 font-bold items-center hover:cursor-pointer hover:scale-110 hover:bg-green-400 hover:text-white hover:duration-500">
                            <img src={lufy} className='max-w-sm max-h-max'></img>
                            <h1 className='text-green-400 animate-bounce'><BsChevronDoubleDown /></h1>
                            <h1>Home Decor</h1>
                        </div>
                        <div className=" max-w-sm rounded-lg border-green-400 flex flex-col max-h-max border p-8 font-bold items-center hover:cursor-pointer hover:scale-110 hover:bg-green-400 hover:text-white hover:duration-500">
                            <img src={lufy} className='max-w-sm max-h-max'></img>
                            <h1 className='text-green-400 animate-bounce'><BsChevronDoubleDown /></h1>
                            <h1>Flyers/Posters</h1>
                        </div>
                        <div className=" max-w-sm rounded-lg border-green-400 flex flex-col max-h-max border p-8 font-bold items-center hover:cursor-pointer hover:scale-110 hover:bg-green-400 hover:text-white hover:duration-500">
                            <img src={lufy} className='max-w-sm max-h-max'></img>
                            <h1 className='text-green-400 animate-bounce'><BsChevronDoubleDown /></h1>
                            <h1>Images/Photographs</h1>
                        </div>
                        <div className=" max-w-sm rounded-lg border-green-400 flex flex-col max-h-max border p-8 font-bold items-center hover:cursor-pointer hover:scale-110 hover:bg-green-400 hover:text-white hover:duration-500">
                            <img src={lufy} className='max-w-sm max-h-max'></img>
                            <h1 className='text-green-400 animate-bounce'><BsChevronDoubleDown /></h1>
                            <h1>Accessories</h1>
                        </div>
                        <div className=" max-w-sm rounded-lg border-green-400 flex flex-col max-h-max border p-8 font-bold items-center hover:cursor-pointer hover:scale-110 hover:bg-green-400 hover:text-white hover:duration-500" onClick={() => Navigate('/projects')}>
                            <img src={lufy} className='max-w-sm max-h-max'></img>
                            <h1 className='text-green-400 animate-bounce'><BsChevronDoubleDown /></h1>
                            <h1>Software Engineering</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
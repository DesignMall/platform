import { BsChevronDoubleDown } from 'react-icons/bs';
import Clothes from '../assets/clothes.png'
import { useNavigate } from 'react-router-dom';
import TypewriterComponent from 'typewriter-effect';
import Header from '../components/Header';
import { useState } from 'react';
import logo from '../assets/Logo2.png'
import Category from '../components/category';
import { motion } from 'framer-motion'
export default function Services() {
    const Navigate = useNavigate()
    const [Modal, setModal] = useState(false)
    return <>
        <div className='flex flex-col h-screen gap-16 overflow-x-hidden'>
            <Header />
            {Modal && <Category onClose={() => setModal(false)} />}
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
                <div className=" flex justify-center">
                    <div className="flex flex-row flex-wrap h-screen justify-center gap-5">
                        <motion.div
                            initial={{ translateX: -100, rotate: -80, opacity: 0 }}
                            animate={{ translateX: 0, rotate: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0 * 0.1 }}>
                            <div className=" max-w-sm rounded-lg border-green-400 flex flex-col max-h-max border p-8 font-bold items-center hover:cursor-pointer hover:scale-110 hover:bg-green-400 hover:text-white hover:duration-500" onClick={() => Navigate('/clothing')}>
                                <img src={Clothes} className='max-w-sm max-h-max'></img>
                                <h1 className='text-green-400 animate-bounc e'><BsChevronDoubleDown /></h1>
                                <h1>Fashion</h1>
                                <h2 className=' text-red-600'>Soon to be Released, Get a Hint</h2>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ translateX: -100, rotate: -80, opacity: 0 }}
                            animate={{ translateX: 0, rotate: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1 * 0.1 }}>
                            <div className=" max-w-sm rounded-lg border-green-400 flex flex-col max-h-max border p-8 font-bold items-center hover:cursor-pointer hover:scale-110 hover:bg-green-400 hover:text-white hover:duration-500" onClick={() => setModal(true)}>
                                <img src={Clothes} className='max-w-sm max-h-max'></img>
                                <h1 className='text-green-400 animate-bounc e'><BsChevronDoubleDown /></h1>
                                <h1>Sports</h1>
                                <h2 className=' text-red-600'>Soon to be Released, Get a Hint</h2>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ translateX: -100, rotate: -80, opacity: 0 }}
                            animate={{ translateX: 0, rotate: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 2 * 0.1 }}>
                            <div className=" max-w-sm rounded-lg border-green-400 flex flex-col max-h-max border p-8 font-bold items-center hover:cursor-pointer hover:scale-110 hover:bg-green-400 hover:text-white hover:duration-500">
                                <img src={logo} className='max-w-sm max-h-max'></img>
                                <h1 className='text-green-400 animate-bounce'><BsChevronDoubleDown /></h1>
                                <h1>Carpentry</h1>
                                <h2 className=' text-red-600'>Soon to be Released</h2>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ translateX: -100, rotate: -80, opacity: 0 }}
                            animate={{ translateX: 0, rotate: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 3 * 0.1 }}>
                            <div className=" max-w-sm rounded-lg border-green-400 flex flex-col max-h-max border p-8 font-bold items-center hover:cursor-pointer hover:scale-110 hover:bg-green-400 hover:text-white hover:duration-500">
                                <img src={logo} className='max-w-sm max-h-max'></img>
                                <h1 className='text-green-400 animate-bounce'><BsChevronDoubleDown /></h1>
                                <h1>Architecture</h1>
                                <h2 className=' text-red-600'>Soon to be Released</h2>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ translateX: -100, rotate: -80, opacity: 0 }}
                            animate={{ translateX: 0, rotate: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 4 * 0.1 }}>
                            <div className=" max-w-sm rounded-lg border-green-400 flex flex-col max-h-max border p-8 font-bold items-center hover:cursor-pointer hover:scale-110 hover:bg-green-400 hover:text-white hover:duration-500">
                                <img src={logo} className='max-w-sm max-h-max'></img>
                                <h1 className='text-green-400 animate-bounce'><BsChevronDoubleDown /></h1>
                                <h1>Flyers & Posters</h1>
                                <h2 className=' text-red-600'>Soon to be Released</h2>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ translateX: -100, rotate: -80, opacity: 0 }}
                            animate={{ translateX: 0, rotate: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 7 * 0.1 }}>
                            <div className=" max-w-sm rounded-lg border-green-400 flex flex-col max-h-max border p-8 font-bold items-center hover:cursor-pointer hover:scale-110 hover:bg-green-400 hover:text-white hover:duration-500" onClick={() => Navigate('/projects')}>
                                <img src={logo} className='max-w-sm max-h-max'></img>
                                <h1 className='text-green-400 animate-bounce'><BsChevronDoubleDown /></h1>
                                <h1>Software</h1>
                                <h2 className=' text-red-600'>Soon to be Released, get a Hint</h2>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
import { useState } from 'react'
// import background from '../assets/backLand.png'
import Logo from '../assets/Logo2.png'
import ThreeD from '../assets/3D/threeD.png'
import { BsChevronDoubleDown } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import intro from '../assets/DesignMall.gif'
import { motion } from 'framer-motion'
function Landing() {
    const [Text, setText] = useState("START")
    const [Animation, setAnimation] = useState('w-80 animate-bounce hover:cursor-pointer')
    const [flagForText, setFlag] = useState(false)
    const Navigate = useNavigate()
    return (
        <>
            <div className='flex h-screen bg-gradient-to-tl from-green-200 to-transparent to-45% justify-center'>
                <div className='mt-20'>
                    {window.innerWidth > 720 && <img src={intro}></img>}
                </div>
                <motion.div initial={{ translateX: 100, opacity: 0 }}
                    animate={{ translateX: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 1.5 }}>
                    <div className='justify-end'>
                        <div className='flex flex-col'>
                            <div className='flex flex-col items-center p-20'>
                                <img src={Logo} className={Animation}></img>
                                {window.innerWidth > 720 && <h2 className='font-bold text-orange-500'>Let's turn your Idea to Reality</h2>}
                                {window.innerWidth < 720 && <img src={ThreeD} className=' w-60'></img>}
                            </div>
                            <div className='flex justify-center'>
                                <h2 className='animate-ping text-red-500'><BsChevronDoubleDown /></h2>
                            </div>
                            <div className='flex flex-col items-center'>
                                <button onMouseOver={() => {
                                    if (!flagForText) setText("Siiir(i) a'M3llem(a)")
                                }} onMouseLeave={() => {
                                    if (!flagForText) setText("Clicki asat(a) Bla Madoukh(i) 3lina")
                                }} onClick={() => {
                                    setAnimation('w-80 animate-spin')
                                    setText("Sbr(i) 3lina wahd Chwi!!")
                                    setFlag(true)
                                    setTimeout(() => {
                                        Navigate('/services')
                                    }, 4000)
                                }}
                                    className='bg-green-600 text-white border-none p-3 rounded-xl hover:bg-dm-orange hover:duration-300 w-72 font-extrabold'>{Text}</button>
                            </div>
                        </div>
                    </div>
                </motion.div>


            </div>
        </>
    )
}
export default Landing
import { useState } from 'react'
import background from '../assets/backLand.png'
import Logo from '../assets/Logo2.png'
import { BsChevronDoubleDown } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import TypewriterComponent from 'typewriter-effect';
function Landing() {
    const [Text, setText] = useState("START")
    const [Animation, setAnimation] = useState('w-80 animate-bounce hover:cursor-pointer')
    const [flagForText, setFlag] = useState(false)
    const Navigate = useNavigate()
    return (
        <>
            <div className='flex h-screen bg-gradient-to-tr from-green-200 to-transparent to-65%'>
                <div className='mt-20'>
                    <img src={background}></img>
                </div>
                <div className='justify-end'>
                    <div className='flex flex-col'>
                        <div className='flex flex-col items-center p-20'>
                            <img src={Logo} className={Animation}></img>
                            <div className='text-orange-400 font-extrabold'>
                                <TypewriterComponent onInit={(typewriter) => {
                                    typewriter.typeString("Yesss!!! I am Happy U're Here!")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Ready for some Magic?")
                                        .changeDeleteSpeed(2)
                                        .start()
                                }} />
                            </div>
                            <h2 className='font-bold '>Click Below and Make Your Life Easy</h2>
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
                                className='bg-green-600 text-white border-none p-3 rounded-xl hover:bg-dm-orange hover:duration-300 w-72'>{Text}</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Landing
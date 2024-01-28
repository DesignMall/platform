import clothes from '../../assets/clothes.png'
import Header from '../../components/Header'
import Logo from '../../assets/Logo2.png'
import TypewriterComponent from 'typewriter-effect';
import { useNavigate } from 'react-router-dom'
export default function Clothing() {
    const Navigate = useNavigate()
    return <>
        <div className='flex flex-col gap-y-10'>
            <Header />
            <div className=' flex justify-center font-extrabold text-green-700'>
                <TypewriterComponent onInit={(typeWriter) => {
                    typeWriter.typeString('Sawb(i) li 7bbat Lkhatr am3llem(a)')
                        .pauseFor(3000)
                        .deleteAll()
                        .typeString("Titiz maydimch al'batal(a) 🤝")
                        .start()
                }} />
            </div>
            {/*aligning the entire cards in the center */}
            <div className='ml-2'>
                <div className='flex flex-row flex-wrap gap-x-3 gap-y-3'>
                    <div className="rounded-2xl border-2 border-green-400 max-w-max max-h-max flex flex-col items-center p-6 gap-y-4">
                        <img src={clothes} className='object-contain w-96 h-56'></img>
                        <h1 className='font-extrabold text-green-800'>T-Shirts</h1>
                        <button className="font-bold bg-green-500 rounded-2xl px-10 py-3 text-white hover:bg-orange-500 hover:duration-300" onClick={()=>Navigate('/canvas')}>CREATE</button>
                        <h2 className=' text-red-500 font-bold'>Soon To Be Released, Have a Hint</h2>
                    </div>
                    <div className="rounded-2xl border-2 border-green-400 max-w-max max-h-max flex flex-col items-center p-6 gap-y-4">
                        <img src={Logo} className='object-contain w-96 h-56'></img>
                        <h1 className='font-extrabold text-green-800'>Sneakers</h1>
                        <button className="font-bold bg-green-500 rounded-2xl px-10 py-3 text-white hover:bg-orange-500 hover:duration-300">CREATE</button>
                        <h2 className=' text-red-500 font-bold'>Soon To Be Released</h2>
                    </div>
                    <div className="rounded-2xl border-2 border-green-400 max-w-max max-h-max flex flex-col items-center p-6 gap-y-4">
                        <img src={Logo} className='object-contain w-96 h-56'></img>
                        <h1 className='font-extrabold text-green-800'>Hoodies</h1>
                        <button className="font-bold bg-green-500 rounded-2xl px-10 py-3 text-white hover:bg-orange-500 hover:duration-300">CREATE</button>
                        <h2 className=' text-red-500 font-bold'>Soon To Be Released</h2>
                    </div>
                    <div className="rounded-2xl border-2 border-green-400 max-w-max max-h-max flex flex-col items-center p-6 gap-y-4">
                        <img src={Logo} className='object-contain w-96 h-56'></img>
                        <h1 className='font-extrabold text-green-800'>Hats</h1>
                        <button className="font-bold bg-green-500 rounded-2xl px-10 py-3 text-white hover:bg-orange-500 hover:duration-300">CREATE</button>
                        <h2 className=' text-red-500 font-bold'>Soon To Be Released</h2>
                    </div>
                    <div className="rounded-2xl border-2 border-green-400 max-w-max max-h-max flex flex-col items-center p-6 gap-y-4">
                        <img src={Logo} className='object-contain w-96 h-56'></img>
                        <h1 className='font-extrabold text-green-800'>Pants</h1>
                        <button className="font-bold bg-green-500 rounded-2xl px-10 py-3 text-white hover:bg-orange-500 hover:duration-300">CREATE</button>
                        <h2 className=' text-red-500 font-bold'>Soon To Be Released</h2>
                    </div>
                    <div className="rounded-2xl border-2 border-green-400 max-w-max max-h-max flex flex-col items-center p-6 gap-y-4">
                        <img src={Logo} className='object-contain w-96 h-56'></img>
                        <h1 className='font-extrabold text-green-800'>Costumes</h1>
                        <button className="font-bold bg-green-500 rounded-2xl px-10 py-3 text-white hover:bg-orange-500 hover:duration-300">CREATE</button>
                        <h2 className=' text-red-500 font-bold'>Soon To Be Released</h2>
                    </div>
                    <div className="rounded-2xl border-2 border-green-400 max-w-max max-h-max flex flex-col items-center p-6 gap-y-4">
                        <img src={Logo} className='object-contain w-96 h-56'></img>
                        <h1 className='font-extrabold text-green-800'>Socks</h1>
                        <button className="font-bold bg-green-500 rounded-2xl px-10 py-3 text-white hover:bg-orange-500 hover:duration-300">CREATE</button>
                        <h2 className=' text-red-500 font-bold'>Soon To Be Released</h2>
                    </div>
                    <div className="rounded-2xl border-2 border-green-400 max-w-max max-h-max flex flex-col items-center p-6 gap-y-4">
                        <img src={Logo} className='object-contain w-96 h-56'></img>
                        <h1 className='font-extrabold text-green-800'>Full 7tta</h1>
                        <button className="font-bold bg-green-500 rounded-2xl px-10 py-3 text-white hover:bg-orange-500 hover:duration-300">CREATE</button>
                        <h2 className=' text-red-500 font-bold'>Soon To Be Released</h2>
                    </div>
                </div>
            </div>
        </div>
    </>
}
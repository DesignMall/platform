import Logo from '../assets/logo.png'
import { AiFillMail } from 'react-icons/ai'
import { FaStudiovinari } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
export default function Header() {
    const Navigate = useNavigate()
    return <>
        <header className='bg-green-500 flex h-24 flex-row justify-around items-center'>
            <div>
                <img src={Logo} className='w-23 h-24 hover:cursor-pointer' onClick={() => Navigate('/')}></img>
            </div>
            <div className=' flex flex-row w-96 justify-between font-bold text-white'>
                <a className='hover:text-orange-200  hover:duration-500 hover:cursor-pointer flex flex-row items-center justify-around w-40'><FaStudiovinari />Who Are We?</a>
                <a className='hover:text-orange-200  hover:duration-500 hover:cursor-pointer flex flex-row items-center justify-around w-40'><AiFillMail />Contact/Report</a>
            </div>
        </header>
    </>
}
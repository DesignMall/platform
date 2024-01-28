import TypewriterComponent from "typewriter-effect";
import Header from "../../components/Header";
import { NavLink, Outlet } from "react-router-dom";
// import { useParams } from "react-router-dom";
export default function Sport() {
    // const { category } = useParams
    return (
        <>
            <div className='flex flex-col h-screen gap-16'>
                <Header />
                <div className='flex flex-col gap-y-16'>
                    <div className='flex justify-center w-screen font-extrabold text-2xl text-slate-500 animate-pulse'>
                        <TypewriterComponent onInit={(typewriter) => {
                            typewriter.typeString(`Dress Player Your Name, Your Player's Name, The Way You Want it`)
                                .pauseFor(3000)
                                .typeString(`Create Everything from Scratch`)
                                .changeDeleteSpeed(2)
                                .start()
                        }}></TypewriterComponent>
                    </div>
                    <div>
                        <div className=" flex justify-center gap-9 items-center">
                            <NavLink to='/sport/clubs' className={({ isActive }) => isActive ? "text-white bg-green-300 p-2 rounded-xl" : "text-white p-2 rounded-xl hover:cursor-pointer bg-green-500 hover:bg-orange-500 hover:duration-300"}>Clubs</NavLink>
                            <NavLink to='/sport/national' className={({ isActive }) => isActive ? "text-white bg-green-300 p-2 rounded-xl" : "text-white p-2 rounded-xl hover:cursor-pointer bg-green-500 hover:bg-orange-500 hover:duration-300"}>National Teams</NavLink>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

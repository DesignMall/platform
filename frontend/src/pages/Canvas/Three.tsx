import { useEffect, useState } from "react"
import Setup3D from "./Initializer"
import toast from "react-hot-toast"
import Coloring from "../../components/Canvas/Coloring"
export default function ThreeDCanv() {
    const [Color, setColor] = useState(false)
    const [Texture, SetTexture] = useState(false)
    const setThemAllFalse = ()=>{
        setColor(false)
        SetTexture(false)
    }
    useEffect(() => {
        Setup3D()
        toast.success('Yalah Sticky l7ala m3a rassk albatal(a)')
    }, [])
    return <>
        <canvas className=" w-screen h-screen border rounded-xl absolute" id="threeCanvas">
        </canvas>
        <div className=" absolute left-0 ml-6 mt-14 bg-green-400 aspect-square rounded-2xl">
            {Color && <Coloring onClose={() => setColor(false)} target="all" />}
        </div>
        <div className=" w-screen bg-green-500 absolute bottom-0">
            <div className=" flex justify-center gap-16 p-4 text-white">
                <div>
                    <button className={` p-4 hover:bg-white hover:duration-300 hover:text-black rounded-2xl ${Color ? 'bg-white text-black' : ''}`}
                        onClick={() => setColor(!Color)}>Color</button>
                </div>
                <div>
                    <button className=" p-4 hover:bg-white hover:duration-300 hover:text-black rounded-2xl">Texture</button>
                </div>
                <div>
                    <button className=" p-4 hover:bg-white hover:duration-300 hover:text-black rounded-2xl">Size</button>
                </div>
            </div>
        </div>
    </>
}
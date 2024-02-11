
import { motion } from 'framer-motion'
import { OptionsCarp } from '../utils/types'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ApplyChanges } from '../states/CarpSlice/Carpentry.Slice'

interface Props {
    options: OptionsCarp[]
}

export default function Options(prop: Props) {
    const { options } = prop

    const Dispatch = useDispatch()

    const ShapeState = {
        type: 'normal',
        legs: 'narrow',
        top: 'flat',
        wheels: 'exist'
    }

    const [Clicker, setClicker] = useState<number | null>()

    return <>
        <div className=" flex items-center">
            <div className=" flex flex-row gap-2 bg-white">
                {options?.map((option, index) => {
                    return <motion.div initial={{ translateX: -80, opacity: 0 }}
                        animate={{ translateX: 0, opacity: 1 }}
                        transition={{ delay: 0.5 * index, duration: 0.6 }}>
                        <div className=' flex gap-20'>
                            <div>
                                <button className=" bg-green-500 rounded-xl p-2 text-white w-44 hover:bg-green-700" onClick={() => {
                                    setClicker(Clicker === index ? null : index)
                                }}>{option.name}</button>
                            </div>
                            {
                                Clicker === index && <motion.div initial={{ translateY: -100, opacity: 0 }}
                                    animate={{ translateY: 0, opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}>
                                    <div className=' flex items-center h-16'>
                                        <ul className=' flex gap-4 w-screen absolute bg-white items-center'>
                                            {option?.images.map((menu) => {
                                                return <motion.div initial={{ translateX: -100, opacity: 0 }}
                                                    animate={{ translateX: 0, opacity: 1 }}
                                                    transition={{ delay: 1, duration: 0.6 }}><li><button className=' p-2 hover:border-green-500 hover:rounded-xl hover:border-2 bg-white'><img src={menu} className=' h-16' onClick={() => Dispatch(ApplyChanges({ ...ShapeState, type: 'round' }))}></img></button></li></motion.div>
                                            })}
                                        </ul>
                                    </div>

                                </motion.div>
                            }
                        </div>

                    </motion.div>
                })}
            </div >
        </div >

    </>



}
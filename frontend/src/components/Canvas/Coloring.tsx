import { CirclePicker } from 'react-color'
interface Props {
    target: string,
    onClose: () => void
}
export default function Coloring(props: Props) {
    const { onClose } = props
    return <>
        <div className=' flex flex-col items-center p-5 gap-12'>
            <div>
                <CirclePicker />
            </div>
            <div className=' flex gap-8'>
                <button className=' bg-orange-400 text-white p-3 rounded-xl hover:bg-orange-600' onClick={()=>onClose()}>Good!</button>
            </div>
        </div>
    </>
}
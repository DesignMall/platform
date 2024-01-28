import Header from "../../components/Header"
export default function Kits(){
    return <>
       <div className='flex flex-col h-screen gap-16'>
          <Header/>
          <div>
            <div className=" border rounded-xl p-4 border-green-500 flex flex-col gap-2">
                <div className=" flex gap-4 items-center">
                    <input type="text" placeholder="Enter A Name"></input>
                    <input type="number"></input>
                </div>
                <div>
                   
                </div>
            </div>
            <div>
                
            </div>
          </div>
       </div>
    </>
}
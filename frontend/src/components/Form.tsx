export default function Form() {
    return <>
        <form className="flex flex-col gap-9 items-center">
            <div className="flex gap-40">
                <div className=" flex flex-col gap-10">
                    <div className="flex gap-4 items-center border-b border-teal-500 py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="First Name" />
                    </div>
                    <div className="flex items-center border-b border-teal-500 py-2">
                        <input type="text" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Last Name"></input>
                    </div>
                    <div className="flex items-center border-b border-teal-500 py-2">
                        <input type="email" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Email"></input>
                    </div>
                </div>
                <div className=" flex flex-col gap-10">
                    <div className="flex items-center border-b border-teal-500 py-2">
                        <input type="text" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Phone Number"></input>
                    </div>
                    <div className="flex items-center border-b border-teal-500 py-2">
                        <input type="textarea" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none h-28" placeholder="Description of Your Project"></input>
                    </div>
                </div>
            </div>
            <div>
                <button className=" bg-green-500 text-white rounded-2xl p-4 hover:duration-300 hover:bg-orange-400">Submit Request</button>
            </div>
        </form>
    </>
}
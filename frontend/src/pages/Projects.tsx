import Header from "../components/Header";
import TypewriterComponent from "typewriter-effect";
import Form from "../components/Form";
export default function Projects() {
    return <>
        <div className=" flex flex-col gap-14">
            <div>
                <Header />
            </div>
            <div className=" flex flex-col gap-3">
                <div className=" flex flex-col gap-5 items-center">
                    <div className=" font-bold"><TypewriterComponent onInit={(typewriter) => {
                        typewriter.typeString('Request a Software to be Made')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('Turn idea into Software')
                            .changeDeleteSpeed(2)
                            .start()
                    }} /></div>
                    <div className=" flex justify-center">
                        <Form />
                    </div>
                </div>
            </div><div className="inline-flex items-center justify-center w-full">
                <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                    <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                    </svg>
                </div>
            </div>
            <div className=" p-4">
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">MediTrack</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                        <div className="flex mt-4 md:mt-6 justify-center">
                            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">About This Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
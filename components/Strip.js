import React, { useEffect, useState } from "react"; 
import FestCard from "./Task1/FestCard";
import WinnerCard from "./WinnerCard";
export default function Strip() {
    const [place, setPlace] = useState(1);
    return (<>
        <img className="w-[90%] mx-auto h-[70%]" src="./ad.png" />
        <div id="views" className="">
            <h1 className="monu text-white mx-5 sm:mx-10 md:mx-20 my-5 text-[2rem] font-extrabold">View</h1>
            <div className="cards mx-5 sm:mx-10 md:mx-20  mb-5 flex justify-start items-center gap-5 flex-wrap flex-row">
                <button className="viewbtn" onClick={() => setPlace(1)}>
                    <span className={`button_top monu flex justify-start items-center flex-row`}>
                        {place == 1 &&   <div className="h-2 w-2 bg- rounded-full bg-blue-500 mx-2"></div>}
                        First
                    </span>
                </button>
                <button className="viewbtn" onClick={() => setPlace(2)}>
                    <span className={`button_top monu flex justify-start items-center flex-row`}>
                        {place == 2 &&   <div className="h-2 w-2 bg- rounded-full bg-blue-500 mx-2"></div>}
                        Second
                    </span>
                </button>
                <button className="viewbtn" onClick={() => setPlace(3)}>

                    <span className={`button_top monu flex justify-start items-center flex-row`}>
                        {place == 3 &&   <div className="h-2 w-2 bg- rounded-full bg-blue-500 mx-2"></div>}
                        Another
                    </span>
                </button>

            </div>
            <div className="w-[95%] mx-auto h-1 bg-gray-900"></div>
            <div id="desc">
                <div className="flex justify-start flex-col mx-5 sm:mx-10 md:mx-20 ">

                    <h1 className="monu text-white my-5 text-[2rem] font-extrabold">Decription</h1>
                    <div className="flex gap-2 justify-start items-center">
                        <h1 className="text-2xl pb-2 text-white ">The Video Title is here</h1>
                        {/* <div className=" w-10 h-1 bg-white"></div> */}
                    </div>
                    <div className="text-base text-[#9ca0d2]">
                        Nucast's Prestige Collection is preserving the magic of movies on blockchain. It features curated iconic films from the public domain for cinema enthusiasts. The Nucast team has remastered timeless classics to provide viewers with a cleaner, more refined, and higher-quality experience.
                    </div>
                </div>
            </div>
            <div id="desc ">
                <div className="flex justify-start flex-col mx-5 sm:mx-10 md:mx-20 ">
                    <h1 className="monu text-white my-5 text-[2rem] font-extrabold">Credits</h1>
                    <div className="text-lg text-[#9ca0d2] monu">
                            <p>  Narendra Modi </p>
                            <p>  Mathew Mardock </p>
                            <p>  Ryan Gosling </p>
                            <p>  Russeta </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="mb-20 mx-5 sm:mx-10 md:mx-20 mt-10 flex justify-between items-center">
            {/* <div className="w-5 h-5  border-2">
                <div className="w-full h-full bg-black relative left-2  -top-2  "></div>
            </div>
            <div className="w-5 h-5 bg-gray-200">
                <div className="w-full h-full bg-black relative -left-2  -top-2  "></div>
            </div> */}
        </div>
    </>
    )
}
"use client";
import { useEffect, useState,Fragment  } from "react";
import load from "../assets/load.svg"
async function fetcher() {
    let poem = await fetch("https://api.ganjoor.net/api/ganjoor/hafez/faal",{
        next:{
          revalidate:60
        }
      });
    let res = await poem.json();
    return res;
}

const Page = () => {
    const [poem, setPoem] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                let po = await fetcher();
                setPoem(po);
            } catch (error) {
                console.error("Error fetching poem:", error);
            }
            setIsLoading(false);
        };

        fetchData();
    }, []);

    return (
        <>
        <div onClick={async () => { setIsLoading(true); setPoem(await fetcher()); setIsLoading(false); }} className="container mx-auto max-w-[40%] shadow-md hover:shadow-lg hover:shadow-slate-900 hover:scale-105 transition duration-500 shadow-gray-700 rounded-lg pb-2 pt-14 px-10 bg-gray-700 opacity-100 hover:-translate-y-3 text-white text-justify mt-10 flex flex-col hover:cursor-pointer font-vazir mb-100px" dir="rtl">
            <h1 className=" bg-slate-950  rounded-1 mb-5 p-6 text-center font-bold">{isLoading ? "در حال دریافت..." : poem.title}</h1>
            <h4 className="text-center font-nas2 leading-8">{isLoading ? <img src={load.src} className="mx-auto my-5 text-center max-w-[60px]"/> : <div dangerouslySetInnerHTML={{ __html: poem.htmlText }} />}</h4>
        <div className="flex mb-0 mt-2 text-gray-500 justify-between w-full mx-auto">
            <span>{poem.sourceName}</span>
            <span>{poem.fullTitle}</span>
        </div>
        </div>

        <div className="absolute right-[20%] top-[40%] animate-move">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
        </div>
        </>
    );
};

export default Page;

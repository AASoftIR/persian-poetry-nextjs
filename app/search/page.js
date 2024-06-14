"use client";
import { useEffect,useState } from "react";
import Loading from "../loading"
import Link from "next/link"
const page = () => {
  const [poemList,setPoem]=useState([])
  const [loading,setLoading]=useState(true)
  const [val,setVal]=useState("")
  useEffect(()=>{
    const fetcher=async()=>{
      let res=await fetch("https://api.ganjoor.net/api/ganjoor/poems/search?PageNumber=1&term=معشوق&PageSize=5")
      let poems=await res.json()
      setPoem(poems)
      setLoading(false)
    }
    fetcher()
  },[])

  useEffect(()=>{
    console.log(val)
    if(val.trim().length>3){
      const fetcher=async()=>{
      setLoading(true)
      let res=await fetch(`https://api.ganjoor.net/api/ganjoor/poems/search?PageNumber=1&term=${val.trim()}&PageSize=5`)
      let poems=await res.json()
      setPoem(poems)
      setLoading(false)
    }
    fetcher()
  }
  },[val])


  return (
    <>
    <div className="container max-w-[45%] mx-auto mt-7">
        <div className="rounded bg-gray-800 py-3 px-2 w-full">
            <input onInput={(e)=>{setTimeout(()=>{setVal(e.target.value)},2000)}} className="p-1 text-decoration-none text-center bg-transparent w-full outline-none focus:outline-none text-white animate-pulse"/></div>
    </div>
    {loading?(<Loading/>):
    (<div className="flex py-3 flex-col flex-wrap max-w-[55%] mx-auto">
      {poemList.map((obj,i)=>(<div key={i} className="flex flex-wrap bg-slate-200 text-black flex-col mb-4 rounded shadow-lg shadow-black text-center py-3 w-[80%] px-5 mx-auto">
        <div className="flex justify-between w-full text-gray-400 text-sm"><span>{obj.fullTitle}</span><span>{obj.category.poet.name}</span></div>
        <Link href={`/poem/${obj.id}`}><h2 className="text-3xl mb-2">{obj.title}</h2></Link>
        <div dangerouslySetInnerHTML={{ __html:val.trim().length>3?obj.htmlText.replace(
                   new RegExp(val.trim(),"g"),
                    `<span class="text-red-800 font-bold animate-pulse">${val.trim()}</span>`
                  ) :obj.htmlText}}></div>
      </div>))}
    </div>)
    }
    </>
  )
}

export default page
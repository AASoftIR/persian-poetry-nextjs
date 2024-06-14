import { Suspense } from "react";
import Link from "next/link"
async function fetcherPoem(){
  let res=await fetch("https://api.ganjoor.net/api/ganjoor/poem/random"
  // ,{
  //   next:{
  //     revalidate:60
  //   }
  // }
)
let poem=await res.json()
  await new Promise((resolve)=>setTimeout(resolve,2000))

  return poem 
}
export default async function Home() {
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function getRandomNumberFloat(min, max) {
    return (Math.random() * (max - min)) + min;
  }
  let p =await fetcherPoem()
  const {plainText,id,title}=p
  return (
    <Suspense fallback={<h1 className="absolute top-[40%] right-[50%] text-5xl animate-bounce">Loading....</h1>}>
    <div className="w-full mx-auto font-nas gap-0">
      <Link href={`/poem/${id}`} className="mx-auto w-full">
    <div className="flex flex-wrap m-auto w-screen mx-auto items-center justify-center h-screen text-wrap overflow-hidden -ml-5 -mt-5 -z-10 leading-tight blur-[1px] text-white -gap-1 " style={{textShadow: 'whitesmoke 0 0 2px'}}>
      {plainText.split(" ").map((word,i)=>(<div key={i} className={`rotate-[27deg]`} style={{fontSize:`${getRandomNumber(10,60)}px`,opacity:`${getRandomNumberFloat(0.150,0.999)}`,filter: `drop-shadow(10px 10px 20px crimson)`}}>{word}</div>))}
    </div>
    </Link>
    </div>
    <div className="rotate-90 fixed right-[29px] top-[50%] animate-ping overflow-hidden"><span className="text-1xl text-white">{title}</span></div>
    </Suspense>
  );
}

import {NextResponse} from "next/server"

export async function GET(req){
    let poem = await fetch("https://api.ganjoor.net/api/ganjoor/hafez/faal");
      let res=await poem.json()
      return NextResponse.json(res)
}
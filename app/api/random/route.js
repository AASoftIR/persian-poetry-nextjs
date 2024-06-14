import {NextResponse} from "next/server"
export async function GET(req){
    let pi=await fetch("https://api.ganjoor.net/api/ganjoor/poem/random")
    let res=await pi.json()
    return NextResponse.json(res)
}
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = req.nextUrl;
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Missing 'id' parameter" }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://api.ganjoor.net/api/ganjoor/poem/${id}?catInfo=true&catPoems=false&rhymes=true&recitations=true&images=true&songs=true&comments=true&verseDetails=true&navigation=true&relatedpoems=true`
    );
    const data = await response.json();
    return  NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}

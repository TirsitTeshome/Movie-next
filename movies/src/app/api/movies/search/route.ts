import { NextRequest, NextResponse } from "next/server";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.TMDB_API_KEY!;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  if (!query) {
    return NextResponse.json({ error: "Missing search query" }, { status: 400 });
  }

  try {
    const res = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1`);
    if (!res.ok) {
      return NextResponse.json({ error: "Failed to search movies" }, { status: res.status });
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

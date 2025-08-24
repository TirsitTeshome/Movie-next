import { NextResponse } from "next/server";

export async function GET() {
  // Log environment variable to verify loading
  console.log("TMDB_API_KEY:", process.env.TMDB_API_KEY);

  const API_KEY = process.env.TMDB_API_KEY;

  if (!API_KEY) {
    return NextResponse.json(
      { error: "Server error: Missing TMDB_API_KEY environment variable" },
      { status: 500 }
    );
  }

  try {
    // Fetch latest movies from TMDB API
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("TMDB API error:", response.status, errorText);
      return NextResponse.json(
        { error: "Failed to load latest movies", details: errorText },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Return JSON response for the client
    return NextResponse.json(data);
  } catch (error: unknown) {
    // Handle unknown errors with type safety
    if (error instanceof Error) {
      console.error("Unexpected error fetching TMDB movies:", error.message);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: "An unknown error occurred" },
      { status: 500 }
    );
  }
}

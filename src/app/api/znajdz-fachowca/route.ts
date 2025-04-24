import { NextResponse } from "next/server";

// Definicje typów dla API
type SearchRequest = {
  location: string;
  radius: number;
  type: string;
  keyword?: string;
};

type GooglePlacesApiResponse = {
  status: string;
  results: any[];
  error_message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as SearchRequest;
    const { location, radius, type, keyword } = body;

    // Sprawdzanie wymaganych parametrów
    if (!location || !radius || !type) {
      return NextResponse.json(
        { error: "Brakujące parametry: wymagane są location, radius i type" },
        { status: 400 }
      );
    }

    // Pobranie klucza API z zmiennych środowiskowych
    const apiKey =
      process.env.GOOGLE_MAPS_API_KEY ||
      "AIzaSyDkVuhJhWPp11mf9vPufB1HghY7a1ENjNk";

    if (!apiKey) {
      return NextResponse.json(
        { error: "Brak skonfigurowanego klucza API" },
        { status: 500 }
      );
    }

    // Budowanie URL zapytania do Google Maps Places API
    let apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=${type}&key=${apiKey}`;

    // Dodanie keyword do zapytania, jeśli istnieje
    if (keyword) {
      apiUrl += `&keyword=${encodeURIComponent(keyword)}`;
    }

    // Wypisanie URL zapytania do debugowania (bez klucza API)
    const debugUrl = apiUrl.replace(apiKey, "API_KEY_HIDDEN");
    console.log("Calling Google Places API:", debugUrl);

    // Wywołanie Google Maps Places API
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.error(`Google API HTTP Error: ${response.status}`);
        return NextResponse.json(
          {
            error: `Błąd połączenia z Google API: ${response.status}`,
            details: await response.text(),
          },
          { status: response.status }
        );
      }

      const data = (await response.json()) as GooglePlacesApiResponse;

      // Logowanie statusu odpowiedzi z Google
      console.log(`Google API response status: ${data.status}`);

      if (data.error_message) {
        console.error("Google API Error:", data.error_message);
        return NextResponse.json(
          { error: `Błąd Google API: ${data.error_message}` },
          { status: 400 }
        );
      }

      // Zwracanie wyników z Google API, niezależnie od statusu
      return NextResponse.json(data);
    } catch (fetchError: unknown) {
      console.error(
        "Fetch error:",
        fetchError instanceof Error ? fetchError.message : String(fetchError)
      );
      return NextResponse.json(
        {
          error: `Błąd podczas żądania do Google API: ${
            fetchError instanceof Error
              ? fetchError.message
              : String(fetchError)
          }`,
        },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    console.error(
      "Server error:",
      error instanceof Error ? error.message : String(error)
    );
    return NextResponse.json(
      {
        error: `Błąd serwera: ${
          error instanceof Error ? error.message : String(error)
        }`,
      },
      { status: 500 }
    );
  }
}

import { fetchAnimals } from "@/utils/api";
import { getAccessToken } from "@/utils/auth";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Get a valid access token
        const token = await getAccessToken();

        // Use the token to fetch animals
        const animalsData = await fetchAnimals(token);

        // Return the data to the client
        return NextResponse.json(animalsData);
    } catch (error) {
        console.error("Error fetching pets:", error);
        return NextResponse.json(
            { error: "Failed to fetch pets" },
            { status: 500 }
        );
    }
}
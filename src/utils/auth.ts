// Token cache
let tokenData: {
    access_token: string;
    expires_at: number;
} | null = null;

export async function getAccessToken(): Promise<string> {
    const currentTime = Date.now();

    // If we have a cached token that's still valid, return it
    if (tokenData && tokenData.expires_at > currentTime) {
        return tokenData.access_token;
    }

    // Otherwise, fetch a new token
    try {
        const clientId = process.env.CLIENT_ID;
        const clientSecret = process.env.CLIENT_SECRET;

        if (!clientId || !clientSecret) {
            throw new Error("Missing Petfinder API credentials");
        }

        const response = await fetch("https://api.petfinder.com/v2/oauth2/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                grant_type: "client_credentials",
                client_id: clientId,
                client_secret: clientSecret,
            }),
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch token: ${response.status}`);
        }

        const data = await response.json();

        // Cache the token with its expiration time
        tokenData = {
            access_token: data.access_token,
            // Set expiration time slightly earlier to be safe
            expires_at: currentTime + (data.expires_in * 1000) - 60000,
        };

        return tokenData.access_token;
    } catch (error) {
        console.error("Error getting access token:", error);
        throw error;
    }
}
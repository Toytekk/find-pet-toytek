const API_URL = 'https://api.petfinder.com/v2/animals';

export async function fetchAnimals(token: string, limit: number = 40) {
    const response = await fetch(`${API_URL}?limit=${limit}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch animals');
    }

    return response.json();
}

export async function fetchAnimalTypes(token: string) {
    const response = await fetch('https://api.petfinder.com/v2/types', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch animal types');
    }

    return response.json();
}
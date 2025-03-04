const API_URL = 'https://api.petfinder.com/v2/animals';

interface AnimalFilters {
  type?: string;
  age?: string;
  coat?: string;
  gender?: string;
  color?: string;
}

export async function fetchAnimals(
  token: string,
  filters?: AnimalFilters,
  limit: number = 40
) {
  const params = new URLSearchParams({ limit: limit.toString() });

  if (filters) {
    if (filters.type) params.append('type', filters.type);
    if (filters.age) params.append('age', filters.age);
    if (filters.coat) params.append('coat', filters.coat);
    if (filters.gender) params.append('gender', filters.gender);
    if (filters.color) params.append('color', filters.color);
  }

  const response = await fetch(`${API_URL}?${params.toString()}`, {
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

import { fetchAnimals } from '@/utils/api';
import { getAccessToken } from '@/utils/auth';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const age = searchParams.get('age');
    const coat = searchParams.get('coat');
    const gender = searchParams.get('gender');
    const color = searchParams.get('color');

    const token = await getAccessToken();

    const filters = {
      ...(type && { type }),
      ...(age && { age }),
      ...(coat && { coat }),
      ...(gender && { gender }),
      ...(color && { color }),
    };

    const animalsData = await fetchAnimals(token, filters);

    return NextResponse.json(animalsData);
  } catch (error) {
    console.error('Error fetching pets:', error);
    return NextResponse.json(
      { error: 'Failed to fetch pets' },
      { status: 500 }
    );
  }
}

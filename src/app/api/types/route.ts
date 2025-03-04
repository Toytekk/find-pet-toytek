import { fetchAnimalTypes } from '@/utils/api';
import { getAccessToken } from '@/utils/auth';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const token = await getAccessToken();

    const typesData = await fetchAnimalTypes(token);

    return NextResponse.json(typesData);
  } catch (error) {
    console.error('Error fetching animal types:', error);
    return NextResponse.json(
      { error: 'Failed to fetch animal types' },
      { status: 500 }
    );
  }
}

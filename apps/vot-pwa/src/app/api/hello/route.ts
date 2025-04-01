import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const dynamic = 'force-static';
export const revalidate = false;

export async function GET(request: NextRequest) {
  try {
    // Example of using request data
    const searchParams = request.nextUrl.searchParams;
    const name = searchParams.get('name') || 'World';

    // Simulate some async operation
    await new Promise((resolve) => setTimeout(resolve, 100));

    return NextResponse.json({
      message: `Hello, ${name}!`,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}

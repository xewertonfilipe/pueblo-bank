import { NextResponse } from 'next/server';

import { applications } from '@/data/applications';

export async function GET() {
  try {
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      data: {
        applications,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Erro ao buscar lista de aplicações',
      },
      { status: 500 }
    );
  }
}

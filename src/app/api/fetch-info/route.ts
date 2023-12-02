import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url).searchParams.get('url');
  if (!url) {
    return NextResponse.json(
      {
        error: 'Missing URL parameter',
      },
      { status: 400 },
    );
  }

  const title = await fetch(url)
    .then((res) => res.text())
    .then((text) => text.match(/<title>(.*)<\/title>/i)?.[1]);

  return NextResponse.json({
    title,
  });
}

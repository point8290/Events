import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const creds = await request.json();

  return new Response("Hello");
}

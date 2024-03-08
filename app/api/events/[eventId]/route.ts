import { NextRequest } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: { eventId: string } }
) {
  return new Response(`Hello ${params.eventId}`);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { eventId: string } }
) {
  return new Response(`Hello ${params.eventId}`);
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { eventId: string } }
) {
  const body = await request.json();
  return new Response(`Hello ${params.eventId}`);
}

export function response(status: number, data: any) {
  return new Response(JSON.stringify(data), { status })
}

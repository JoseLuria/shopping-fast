export function response(status: number, data: any) {
  return new Response(JSON.stringify(data), { status })
}

export const excludeFields = <T, Key extends keyof T>(model: T, keys: Key[]): Omit<T, Key> => {
  for (const key of keys) {
    delete model[key]
  }
  return model
}

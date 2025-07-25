export function pickBlueprint<C extends Record<string, any>, K extends keyof C>(
  catalogue: C,
  keys: readonly K[]
): Record<K, C[K]> {
  return keys.reduce((obj, k) => ({ ...obj, [k]: catalogue[k] }), {} as any);
}
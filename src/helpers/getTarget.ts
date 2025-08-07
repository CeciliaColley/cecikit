export function getTarget<
  Map extends Record<string, unknown>,
  Key extends keyof Map,
>(map: Map, key: Key): Map[Key] {
  const target = map[key];
  if (!target)
    throw new Error(`No target was found for the given key -> ${String(key)}`);
  return target;
}
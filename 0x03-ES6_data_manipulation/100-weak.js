export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  let cnt = weakMap.get(endpoint) || 0;
  cnt += 1;

  if (cnt >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(endpoint, cnt);
  }
}

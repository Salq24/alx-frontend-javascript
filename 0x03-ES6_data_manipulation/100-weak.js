// Export a WeakMap instance named weakMap
export const weakMap = new WeakMap();

// Export the queryAPI function
export function queryAPI(endpoint) {
  // Check if the endpoint is already in weakMap
  const count = weakMap.get(endpoint) || 0;

  // If the count is 5 or more, throw an error
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Otherwise, increment the count for this endpoint in weakMap
  weakMap.set(endpoint, count + 1);
}
}

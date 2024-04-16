/**
 * A weak map of endpoints and the number of calls made.
 */
export const weakMap = new WeakMap();

/**
 * The maximum number of calls for an endpoint.
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * Tracks the number of calls made to an API's endpoint.
 * @param {{
 *   protocol: String,
 *   name: String,
 * }} endpoint - The endpoint to make a request to.
 * @throws {Error} If the number of calls for the endpoint exceeds the maximum allowed.
 * @returns {void}
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  const callCount = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, callCount);
  if (callCount >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}


// Exercise 6: Delay with Fetch
// Rules: return the Promise, use .then() (no async/await), show the result with console.log inside .then().

/**
 * Wait for delay milliseconds (setTimeout inside a new Promise)
 * Then fetch the URL
 * Use .then() to show the first 50 characters of the response
 *
 * Example output:
 *   First 50 chars: { "userId": 1, "id": 1, "title": "sunt aut...
 *
 * @param {string} url
 * @param {number} delay - milliseconds to wait before fetching
 * @returns {Promise} the Promise chain (return it, so whoever calls the function can wait for it)
 */
function fetchWithDelay(url, delay) {
  // write your code here
}

module.exports = { fetchWithDelay };

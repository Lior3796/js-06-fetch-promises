// Exercise 5: Check if Post Exists (with .catch)
// Rules: return the Promise, use .then() (no async/await), show the result with console.log inside .then().

/**
 * Fetch post by ID
 * If found, show "Post exists"
 * If error, show "Post not found" (use .catch)
 * Note: fetch does NOT fail on 404 - check response.ok and throw an error yourself
 *
 * Example output:
 *   Post exists   (or: Post not found)
 *
 * @param {number} postId
 * @returns {Promise} the Promise chain (return it, so whoever calls the function can wait for it)
 */
function checkPostExists(postId) {
  // write your code here
}

module.exports = { checkPostExists };

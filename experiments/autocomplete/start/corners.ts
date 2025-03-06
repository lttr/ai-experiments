/**
 * Checks every corner of the given matrix for a winning condition.
 * The winning condition is up to you to decide.
 *   - top-left wins if the number is even
 *   // TODO: Add other corners
 *
 * @param matrix - The matrix to check
 * @returns An object characterizing which corners have won
 */
export function handleCorners(matrix: number[][]) {
  const topLeftWins = matrix[0][0] % 2 === 0 ? true : false
  // TODO: Finish this function
  return {
    topLeft: topLeftWins,
    // TODO: Add other corners
  }
}

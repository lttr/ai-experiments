/**
 * Checks every corner of the given matrix for a winning condition.
 * The winning condition is up to you to decide.
 *   - top-left wins if the number is even
 *   - top-right wins if the number is odd
 *   - bottom-left wins if the number is divisible by 3
 *   - bottom-right wins if the number is divisible by 5
 *
 * @param matrix - The matrix to check
 * @returns An object characterizing which corners have won
 */
export function handleCorners(matrix: number[][]) {
  const topLeftWins = matrix[0][0] % 2 === 0 ? true : false
  const topRightWins = matrix[0][matrix[0].length - 1] % 2 === 0 ? true : false
  const bottomLeftWins = matrix[matrix.length - 1][0] % 3 === 0 ? true : false
  const bottomRightWins =
    matrix[matrix.length - 1][matrix[0].length - 1] % 5 === 0 ? true : false

  return {
    topLeft: topLeftWins,
    topRight: topRightWins,
    bottomLeft: bottomLeftWins,
    bottomRight: bottomRightWins,
  }
}

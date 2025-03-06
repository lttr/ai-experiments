import { handleCorners } from "./corners.ts"

function runTest() {
  const matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ]

  const expected = {
    topLeft: false,
    topRight: false,
    bottomLeft: true,
    bottomRight: true,
  }

  const result = handleCorners(matrix)

  let hasError = false
  if (result.topLeft !== expected.topLeft) {
    console.error("Test failed: topLeft corner is not correct")
    hasError = true
  }
  if (result.topRight !== expected.topRight) {
    console.error("Test failed: topRight corner is not correct")
    hasError = true
  }
  if (result.bottomLeft !== expected.bottomLeft) {
    console.error("Test failed: bottomLeft corner is not correct")
    hasError = true
  }
  if (result.bottomRight !== expected.bottomRight) {
    console.error("Test failed: bottomRight corner is not correct")
    hasError = true
  }

  if (hasError) {
    return
  }

  console.log("Test passed")
}

runTest()

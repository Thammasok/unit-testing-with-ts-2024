import { doubleSum } from '../../../src/basic/mock/01-calculate'

// 1. solution 1
jest.mock('../../../src/basic/math', () => ({
  add: jest.fn((x, y) => {
    if (x === 1 && y === 2) return 20

    return x + y
  })
}))

describe('Basic Mock solution 1', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('should return 23 when call doubleSum and send 1 and 2', () => {
    const numberOne = 1
    const numberTwo = 2
    // if not mock return value (1 + 2) + (1 + 2) = 6
    const expected = 23

    const result = doubleSum(numberOne, numberTwo)

    expect(result).toBe(expected)
  })

  test('should return 23 when call doubleSum and send 10 and 2', () => {
    const numberOne = 10
    const numberTwo = 2
    const expected = 24

    const result = doubleSum(numberOne, numberTwo)

    expect(result).toBe(expected)
  })
})

// 2. solution 2
// import * as math from '../../src/math'

// describe('Basic Mock solution 2', () => {
//   it('should return 20 when call doubleSum and send 1 and 2', () => {
//     // Arrange
//     const numberOne = 1
//     const numberTwo = 2
//     const expected = 20

//     const addMock = math.add as jest.Mock

//     addMock.mockReturnValue(17)

//     const total = doubleSum(numberOne, numberTwo)

//     expect(addMock).toHaveBeenCalled()
//     expect(total).toBe(expected)
//   })

//   it('should return 110 when call doubleSum and send 1 and 2', () => {
//     // Arrange
//     const numberOne = 99
//     const numberTwo = 1
//     const expected = 10

//     const addMock = math.add as jest.Mock

//     addMock.mockReturnValue(17)

//     const total = doubleSum(numberOne, numberTwo)

//     expect(addMock).toHaveBeenCalled()
//     expect(total).toBe(expected)
//   })
// })

import { doubleSum } from '../../src/mock/01-calculate'

// 2. solution 2
import * as math from '../../src/math'

// 1. solution 1
describe('Basic Mock solution 1', () => {
  beforeEach(() => {
    jest.mock('../../src/math', () => ({
      add: jest.fn(() => 20)
    }))
  })

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
})

describe('Basic Mock solution 2', () => {
  it('should return 20 when call doubleSum and send 1 and 2', () => {
    // Arrange
    const numberOne = 1
    const numberTwo = 2
    const expected = 23

    const addMock = math.add as jest.Mock

    addMock.mockReturnValue(17)

    const total = doubleSum(numberOne, numberTwo)

    expect(addMock).toHaveBeenCalled()
    expect(total).toBe(expected)
  })
})

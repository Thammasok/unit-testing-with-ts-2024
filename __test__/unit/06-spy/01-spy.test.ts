import { doubleSum } from '../../../src/function/mock/01-calculate'
import * as math from '../../../src/function/math'

describe('mock', () => {
  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks()
  })

  it('Should be called add when call doubleSum', () => {
    const x = 2
    const y = 2

    const mathAddSpy = jest.spyOn(math, 'add')

    doubleSum(x, y)

    expect(mathAddSpy).toHaveBeenCalledTimes(1)
  })

  it('Should be return 9 when call doubleSum and send 2, 2', () => {
    const x = 2
    const y = 2
    const actual = 9

    // ใช้ spyOn ในการทำ Mock / Stub ได้
    jest.spyOn(math, 'add').mockImplementation(() => 5)

    const result = doubleSum(x, y)

    expect(result).toBe(actual)
  })
})

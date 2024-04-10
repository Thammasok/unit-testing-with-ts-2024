import * as calculate from '../../../src/function/mock/01-calculate'

describe('spy self', () => {
  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks()
  })

  it('Should be called add when call doubleSum', () => {
    const x = 2
    const y = 2

    // const mathAddSpy = jest.spyOn(calculate, 'add')

    // calculate.doubleSum(x, y)

    // expect(mathAddSpy).toHaveBeenCalledTimes(1)
  })
})

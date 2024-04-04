import { add } from '../src/math'

describe('Math function', () => {
  it('should add 5 by 3', () => {
    const result = add(5, 2)
    expect(result).toEqual(8)
  })
})

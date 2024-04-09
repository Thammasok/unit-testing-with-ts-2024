import { add } from '../../src/function/math'

it('message', () => {
  // Arrange
  const num1 = 5
  const num2 = 3
  const actual = 8

  // Action
  const result = add(num1, num2)

  // Assert
  expect(result).toEqual(actual)
})

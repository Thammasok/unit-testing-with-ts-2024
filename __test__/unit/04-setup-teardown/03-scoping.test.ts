// 3. scoping
// Applies to all tests in this file
beforeEach(() => {
  console.log('to do before test')
})

// Test case
test('add 1 + 2 to equal 3', () => {
  expect(1 + 2).toEqual(3)
})

describe('matching cities to foods', () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    console.log('to do before test in describe')
  })

  // Test case
  test('add 3 + 4 to equal 7', () => {
    expect(3 + 4).toEqual(7)
  })
})

// 1. repeating setup
beforeEach(() => {
  console.log('to do before test')
})

afterEach(() => {
  console.log('to do after test')
})

// Test case
test('add 1 + 2 to equal 3', () => {
  expect(1 + 2).toEqual(3)
})

test('add 3 + 4 to equal 7', () => {
  expect(3 + 4).toEqual(7)
})

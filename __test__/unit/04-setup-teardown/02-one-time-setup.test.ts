// 2. one time setup
beforeAll(() => {
  console.log('to do before all test')
})

afterAll(() => {
  console.log('to do after all test')
})

// Test case
test('add 1 + 2 to equal 3', () => {
  expect(1 + 2).toEqual(3)
})

test('add 3 + 4 to equal 7', () => {
  expect(3 + 4).toEqual(7)
})

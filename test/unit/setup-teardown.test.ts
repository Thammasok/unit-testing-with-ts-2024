// 1. repeating setup
beforeEach(() => {
  console.log('to do before test')
})

afterEach(() => {
  console.log('to do after test')
})

// 2. one time setup
// beforeAll(() => {
//   console.log('to do before all test')
// })

// afterAll(() => {
//   console.log('to do after all test')
// })

// Test case
test('add 1 + 2 to equal 3', () => {
  expect(1 + 2).toEqual(3)
})

test('add 3 + 4 to equal 7', () => {
  expect(3 + 4).toEqual(7)
})

// 3. scoping
// Applies to all tests in this file
// beforeEach(() => {
//   console.log('to do before test')
// })

// // Test case
// test('add 1 + 2 to equal 3', () => {
//   expect(1 + 2).toEqual(3)
// })

// describe('matching cities to foods', () => {
//   // Applies only to tests in this describe block
//   beforeEach(() => {
//     console.log('to do before test in describe')
//   })

//   // Test case
//   test('add 3 + 4 to equal 7', () => {
//     expect(3 + 4).toEqual(7)
//   })
// })

// 4. order execution
// beforeAll(() => console.log('1 - beforeAll'))
// afterAll(() => console.log('1 - afterAll'))
// beforeEach(() => console.log('1 - beforeEach'))
// afterEach(() => console.log('1 - afterEach'))

// test('', () => console.log('1 - test'))

// describe('Scoped / Nested block', () => {
//   beforeAll(() => console.log('2 - beforeAll'))
//   afterAll(() => console.log('2 - afterAll'))
//   beforeEach(() => console.log('2 - beforeEach'))
//   afterEach(() => console.log('2 - afterEach'))

//   test('', () => console.log('2 - test'))
// })

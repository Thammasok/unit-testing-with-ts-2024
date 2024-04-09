import { fetchData } from '../../src/function/async'

// 1.1 Promise resolves
test('the data is peanut butter', async () => {
  return fetchData(true).then((data) => {
    expect(data).toBe('peanut butter')
  })
})

// 1.2 Promise reject
test('the fetch fails with an error', () => {
  expect.assertions(1)
  return fetchData(false).catch((error) => {
    expect(error).toBe('error message')
    // expect(error).toMatch('error message')
  })
})

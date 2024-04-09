import { fetchData, fetchDataWithCallback } from '../../../src/function/async'

// 2.1 Async Await
test('the data is peanut butter', async () => {
  const data = await fetchData(true)
  expect(data).toBe('peanut butter')
})

test('the fetch fails with an error', async () => {
  try {
    await fetchData(false)
  } catch (error) {
    expect(error).toMatch('error')
  }
})

// 2.2 Async Await with resolves and rejects
test('the data is peanut butter', async () => {
  await expect(fetchData(true)).resolves.toBe('peanut butter')
})

test('the fetch fails with an error', async () => {
  await expect(fetchData(false)).rejects.toMatch('error')
})

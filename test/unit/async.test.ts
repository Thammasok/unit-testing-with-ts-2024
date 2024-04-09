import { fetchData, fetchDataWithCallback } from '../../src/basic/async'

// 1.1 Promise resolves
test('the data is peanut butter', async () => {
  return fetchData(true).then((data) => {
    expect(data).toBe('peanut butter')
  })
})

// 1.2 Promise reject
// test('the fetch fails with an error', () => {
//   expect.assertions(1)
//   return fetchData(false).catch((error) => {
//     expect(error).toMatch('error messages')
//   })
// })

// 2.1 Async Await
// test('the data is peanut butter', async () => {
//   const data = await fetchData(true)
//   expect(data).toBe('peanut butter')
// })

// test('the fetch fails with an error', async () => {
//
//   try {
//     await fetchData(false)
//   } catch (error) {
//     expect(error).toMatch('error')
//   }
// })

// 2.2 Async Await with resolves and rejects
// test('the data is peanut butter', async () => {
//   await expect(fetchData(true)).resolves.toBe('peanut butter')
// })

// test('the fetch fails with an error', async () => {
//   await expect(fetchData(false)).rejects.toMatch('error')
// })

// 3. Callback
// test('the data is peanut butter', (done) => {
//   function callback(error: string | null, data: string | null) {
//     if (error) {
//       done(error)
//       return
//     }
//     try {
//       expect(data).toBe('peanut butter')
//       done()
//     } catch (error) {
//       done(error)
//     }
//   }

//   fetchDataWithCallback(callback)
// })

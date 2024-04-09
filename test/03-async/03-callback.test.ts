import { fetchDataWithCallback } from '../../src/function/async'

// 3. Callback
test('the data is peanut butter', (done) => {
  // Arrange
  function callback(error: string | null, data: string | null) {
    if (error) {
      done(error)
      return
    }
    try {
      // Assertion
      expect(data).toBe('peanut butter')
      done()
    } catch (error) {
      done(error)
    }
  }

  // Action
  fetchDataWithCallback(callback)
})

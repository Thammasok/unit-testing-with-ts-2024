import _ from 'lodash'
import { getUserByUserName } from '../../src/mock/02-user'

// Normal without mock will throw error 
// jest.mock('lodash')

describe('mock', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  // 1. Normal without mock
  it('Should be index from keyword without mock', () => {
    const keyword = 'barney'

    const actual = getUserByUserName(keyword)

    expect(actual).toMatchObject({
      user: 'barney',
      birthday: '1980-01-01',
      age: 47
    })
  })

  // 2. With mock
  it('Should be index from keyword with mock', () => {
    const keyword = 'barney'

    // Mock lodash
    jest.mock('lodash')
    const mockFindIndex = jest.fn().mockReturnValue(2) // pebbles
    _.findIndex = mockFindIndex // Override lodash (optional, if needed)

    const actual = getUserByUserName(keyword)

    expect(mockFindIndex).toHaveBeenCalled()
    expect(actual).toMatchObject({
      user: 'pebbles',
      birthday: '2000-01-01',
      age: 27
    })
  })
})

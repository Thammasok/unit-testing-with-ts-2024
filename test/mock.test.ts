// import { doubleSum } from '../src/calculate'
// import * as math from '../src/math'
import _ from 'lodash'
import { getUser } from '../src/mock'

jest.mock('../src/math')

describe('mock', () => {
  // afterEach(() => {
  //   // restore the spy created with spyOn
  //   jest.restoreAllMocks()
  // })

  it('Should be index from keyword not mock', () => {
    const keyword = 'barney'

    const actual = getUser(keyword)

    expect(actual).toMatchObject({
      user: 'barney',
      birthday: '1980-01-01',
      age: 47
    })
  })

  // it('Should be index from keyword with spy', () => {
  //   const keyword = 'barney'

  //   const findIndexSpy = jest.spyOn(_, 'findIndex').mockReturnValue(2)

  //   const actual = getUser(keyword)

  //   expect(findIndexSpy).toHaveBeenCalled()
  //   expect(actual).toMatchObject({
  //     user: 'pebbles',
  //     birthday: '2000-01-01',
  //     age: 27
  //   })
  // })

  // Not use
  // it('ทดสอบการคำนวน บวกลบ ข้อมูล โดยใช้ Mock Fuction', () => {
  //   // Arrange
  //   const numberOne = 1
  //   const numberTwo = 2
  //   const expected = 23

  //   const addMock = math.add as jest.Mock

  //   addMock.mockReturnValue(20)

  //   const total = doubleSum(numberOne, numberTwo)

  //   expect(addMock).toHaveBeenCalled()
  //   expect(total).toBe(expected)
  // })

  // it('ทดสอบการ Stub Function โดยใช้ SpyOn Fuction', () => {
  //   const x = 2
  //   const y = 2
  //   const actual = 9

  //   // ใช้ spyOn ในการทำ Mock / Stub ได้
  //   const spy = jest.spyOn(math, 'add').mockImplementation(() => 5)

  //   const result = doubleSum(x, y)

  //   expect(spy).toHaveBeenCalled()
  //   expect(result).toBe(actual)
  // })
})

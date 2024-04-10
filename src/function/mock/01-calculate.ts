import { add } from '../math'

export const doubleSum = (x: number, y: number): number => {
  const sum = add(x, y)
  return x + y + sum
}

// use for spy self test
// export const add = (x: number, y: number): number => {
//   return x + y
// }

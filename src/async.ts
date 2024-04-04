export const fetchData = (isSuccess?: boolean) => {
  return new Promise((resolve, rejects) => {
    if (isSuccess) {
      return resolve('peanut butter')
    }

    return rejects('error message')
  })
}

export const fetchDataWithCallback = (
  cb: (error: string | null, data: string | null) => void
) => {
  cb(null, 'peanut butter')
}

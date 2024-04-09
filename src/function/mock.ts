import _ from 'lodash'

export const getUser = (keyword: string) => {
  var users = [
    { user: 'barney', birthday: '1980-01-01', age: 47 },
    { user: 'fred', birthday: '1990-01-01', age: 37 },
    { user: 'pebbles', birthday: '2000-01-01', age: 27 }
  ]

  const index = _.findIndex(users, (o) => {
    return o.user == keyword
  })

  return users[index]
}

const _ = require('lodash')

const a = [1, 7, 8, 4, 5]
const b = [6, 7, 8, 9, 10]
const c = _.difference(a,b)

console.log(c)
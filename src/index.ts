import './styles/index.scss'

const obj = {
    a: 1,
    b: '123'
}
const anotherObj = {
    ...obj,
    c: true
}

import foo from './foo'
console.log(foo)

console.log('index.ts.')

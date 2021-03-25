import './styles/index.scss'

const obj = {
    a: 1,
    b: '123'
}
const anotherObj = {
    ...obj,
    c: true
}
console.log('only reload js not html content.')

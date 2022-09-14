// const newPost = (post, addedAt = Date()) => ({
// 	...post,
// 	addedAt: addedAt,
// })
// const firstPost = {
// 	id: 1,
// 	name: 'Makarov'
// }
// console.log(newPost(firstPost))

// const fnWithError = () => {
// 	throw new Error('Some error')
// }
// try {
// 	fnWithError()
// }catch(error){
// 	// console.error(error)
// 	console.log(error.message)
// }
// console.log('continue...')

// let a = 10;

// const b = 5;

// if (a > b) {
// 	console.log('a is larger'); // a is larger
// }
// for ( let i = 0; i++; i < 5) {
// 	console.log(i);
// }
// const myArray = [1,2,3]

// myArray.push(5)
// myArray.pop()
// myArray.unshift(10)
// myArray.shift()

// myArray.forEach(el => console.log(el *2))

// const newArray = myArray.map(el => {
// 	return el * 3
// })

// console.log(newArray)
// console.log(myArray)

// const {name, age} = userProfile
// const {comments} = userProfile

// const fruits = ['apple', 'banana']
// const [fruitOne, fruitTwo] = fruits
// console.log(fruitOne) // apple

// const userProfile = {
// 	name: 'Mak',
// 	age: 23,
// 	comments: true,
// }
// const userInfo = ({name, age}) => {
// 	if (!age) {
// 		return `User ${name} has no comments`
// 	}
// 	return `User ${name} has ${age} comments`
// }
// console.log(userInfo(userProfile))

// const person = {
// 	age: 20
// }
// if (!person.name) {
// 	console.log('Name no provided')
// }

// let val = 10
// if (val < 5){
// 	val = val + 10
// } else {
// 	val = val - 10
// }
// console.log(val) // 0


// const age = 19
// if (age > 18) {
// 	console.log('Ok, beer!')
// } else if (age > 21) {
// 	console.log('Ok and vodka')
// } else {
// 	console.log('Toworrow')
// }

// let a = 1
// let b = 2

// const month = 2
// switch (month) {
// 	case 12:
// 		console.log('Dec')
// 		break
// 	case 2:
// 		console.log('Feb')
// 		break
// 	case 1:
// 		console.log('Jan')
// 		break
// 	default:
// 		console.log('Это не зимний месяц')
// }

// const sumPositiveNumbers = (a, b) => {
// 	if (typeof a !== 'number' || typeof b !== 'number') {
// 		return 'One of the arguments in not a number'
// 	}
// 	if (a <= 0 || b <= 0) {
// 		return 'Numbers are not positive'
// 	}
// 	return a + b
// }
// console.log(sumPositiveNumbers(66, 3))

// const value1 = 17
// const value2 = 13
// value1 && value2
// 	? console.log(sumPositiveNumbers(value1, value2))
// 	: console.log('One of the arguments in not a number')

// const val = 10
// val
// 	? console.log('Условие истино')
// 	: console.log('Условие ложно')

// let value = -5
// const res = value >= 0 ? value : -value
// console.log(res) // 5

// let i = 10
// do {
// 	console.log(i)
// 	i++
// } while(i<5)

// const myObject = {
// 	x: 10,
// 	y: true,
// 	z: 'abc'
// }
// for (const znak in myObject){
// 	console.log(znak, myObject[znak])
// }

// const myString = 'hey'
//  for (const letter of myString){
// 	console.log(letter)
// }

// const myObject = {
// 	x: 10,
// 	y: true,
// 	z: 'Mak'
// }
// Object.keys(myObject).forEach(key => {
// 	console.log(key, myObject[key])
// })

// Object.values(myObject).forEach(value =>{
// 	console.log(value)
// })
const one = 4
import sayMyName from './moduleTwo.js'
sayMyName() // Makarov

import {
	one as oneRenamed,
	two
} from './moduleTwo.js'
console.log(oneRenamed) // 1
console.log(two) // 6
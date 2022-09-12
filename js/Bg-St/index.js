// const name = 'Ilya'
// const age = 23
// const userProfile = {
// 	name,
// 	age,
// 	lastName: 'Makov'
// }
// // console.log(userProfile)
// // 
// const myCity = {
// 	city: 'Ekb',
// 	cityGreeting: function () {
// 		console.log('Greetings')
// 	}
// }
// // myCity.cityGreeting()
// function myFn(a, b) {
// 	let c
// 	a = a + 1
// 	c = a + b
// 	return c
// }
// const sumMyFn = myFn(3, 3)
// // console.log(sumMyFn)
// function multiply(a, b){
// 	let c
// 	c = a * b
// 	console.log(c)
// 	return c
// }
// // console.log(multiply(10, 6))
// // const sumMul = multiply(10, 5)
// // console.log(sumMul)
// multiply(10, 6)
// multiply(50, 2)
// function sayMyName (a, b){
// 	let c
// 	c = a + b
// 	console.log(c)
// 	return c
// }
// // sayMyName('Ilya ', 'Makov ', 1999)
// // sayMyName('Chel ', 'or Ekb')


// const personOne = {
// 	name: 'Mak',
// 	age: 23
// }
// function person2 (personOne){
// 	const updatePerson2 = {...personOne}
// 	updatePerson2.age += 1
// 	return updatePerson2
// }
// const updatePerson2 = person2(personOne)
// console.log(personOne.age)
// console.log(updatePerson2.age)


// function printMyName (){
// 	console.log('Mak')
// }
// setTimeout(printMyName, 3000)

// const a = 5
// function myFn () {
// 	function innerFn () {
// 		console.log (a)
// 	}
// 	innerFn ()
// }
// myFn()

// let a 
// let b 
// function myFn () {
// 	let b
// 	a = true
// 	b = 10
// 	console.log(b) // 10
// }
// myFn ()	// 10
// console.log(a) // true
// console.log(b) // undefined

// let a = 1
// let b = 2
// let c = 6
// let d = 10
// console.log(a && b && c && d) // undefined
// console.log(a || b || c || d) // 1

// const buttonInfo = {
// 	text: 'buy'
// }
// const buttonStyle = {
// 	w: 200,
// 	h: 150,
// 	color: 'red'
// }
// const button = {
// 	...buttonInfo,
// 	...buttonStyle
// }
// console.table(button) // 4 свойства

// const name = 'My name is Mak,'
// const city = 'i live in Chel'
// const greeting = `${name} ${city}`
// console.log(greeting)

// const myFn = function(a, b) {
// 	let c
// 	a = a + 1
// 	c = a + b
// 	console.log(c)
// 	return c
// }
// myFn (3, 3) // 7

const myFn = (a, b) => {
	let c
	a = a + 1
	c = a + b
	console.log(c)
	return c
}
myFn (3, 5) // 9

const multByFactor = (value, multiplier = 1) => {
	console.log(value * multiplier)
	return value * multiplier
}
multByFactor(10, 2) //20
multByFactor(10)	  //10


const newPost = (post, addedAt = Date()) => ({
	...post,
	addedAt: addedAt
})
const firstPost = {
	id: 1,
	name: 'Makarov'
}
console.table(newPost(firstPost))


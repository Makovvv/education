const name = 'Ilya'
const age = 23
const userProfile = {
	name,
	age,
	lastName: 'Makov'
}
// console.log(userProfile)
// 
const myCity = {
	city: 'Ekb',
	cityGreeting: function () {
		console.log('Greetings')
	}
}
// myCity.cityGreeting()
function myFn(a, b) {
	let c
	a = a + 1
	c = a + b
	return c
}
const sumMyFn = myFn(3, 3)
// console.log(sumMyFn)
function multiply(a, b){
	let c
	c = a * b
	console.log(c)
	return c
}
// console.log(multiply(10, 6))
// const sumMul = multiply(10, 5)
// console.log(sumMul)
multiply(10, 6)
multiply(50, 2)
function sayMyName (a, b){
	let c
	c = a + b
	console.log(c)
	return c
}
// sayMyName('Ilya ', 'Makov ', 1999)
// sayMyName('Chel ', 'or Ekb')


const personOne = {
	name: 'Mak',
	age: 23
}
function person2 (personOne){
	const updatePerson2 = {...personOne}
	updatePerson2.age += 1
	return updatePerson2
}
const updatePerson2 = person2(personOne)
console.log(personOne.age)
console.log(updatePerson2.age)


function printMyName (){
	console.log('Mak')
}
setTimeout(printMyName, 3000)
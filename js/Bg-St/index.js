const name = 'Ilya'
const age = 23
const userProfile = {
	name,
	age,
	lastName: 'Makov'
}
console.log(userProfile)
// 
const myCity = {
	city: 'Ekb',
	cityGreeting: function () {
		console.log('Greetings')
	}
}
myCity.cityGreeting()

const person = {
	name: 'Mak',
	age: 23,
	local: {
		city: 'Chel'
	}
}
const person2 = JSON.parse(JSON.stringify(person))
person2.local.city = 'Ekb'
console.log(person)
console.log(person2)


function myFn(a, b) {
	let c
	a = a + 1
	c = a + b
	return c
}
const sumMyFn = myFn(3, 3)
console.log(sumMyFn)


function multiply(a, b){
	let c
	c = a * b
	return c
}
const sumMul = multiply(10, 5)
console.log(sumMul)

// console.log(multiply(10, 5))

// const myName = {
// 	firstName: 'Ilya',
// 	lastName: 'Makarov'
// }
// const copyName = myName
// const copyNameG = copyName
// copyNameG.gender = 'Male'
// const myNameFull = myName
// myNameFull.date = 1999
// myNameFull.lastName = 'Makovvv'
// const sayMyName = () => {
// 	console.log(myNameFull)
// }

// sayMyName()

const myCity = {
	city: 'St. Petersburg',
	info: {
		isPopular: true,
		country: 'Russia'
	}
}
console.log(myCity.info)
delete myCity.info.isPopular
console.log(myCity.info)
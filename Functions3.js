// // Write a function that takes the name of a person as an argument, 
// // and says "Hello" to that person in the console.

// var greetings = function(name) {
// 	console.log("Hello " + name);
// }

// greetings("Tosca")

// var greetings = function(name) {
// 	return("Hello " + name)
// }

// var message = greetings("Calvin")
// console.log(message)

// If your previous function did not use the return keyword, modify it so that it does. 
// It should return the message to be logged instead of logging it directly. 
// Store the result in a variable and log that instead.

// Bonus: Appreciate the difference between logging from within the function and 
// returning a value to be logged outside the function.

// Write a function add() that takes two numbers as arguments and returns the sum.

var add = function (a, b) {
	return (a + b)
}
var total = add(9, 11)
console.log(total)

var sub = function (a, b) {
	return (a - b)
}
var total2 = sub(88, 109)
console.log(total2)

// Write a function sub() take takes two numbers as arguments and returns the difference.

// Write a function combine() that takes three parameters. The first two are numbers 
// and the last is a boolean. If the boolean is true, return the sum of the first two 
// arguments, otherwise, return the difference. Hint: use add() and sub() from within combine().

// var add = function (a, b) {
// 	return (a + b)
// }

// var sub = function (a, b) {
// 	return (a - b)
// }
// var combine = function (a, b, c) {
// 	if (c === true) {
// 		return add(a,b)
// 	} else {
// 		return sub(a,b)
// 	}
// }
// var total = combine(38, 90, 4>3)
// console.log(total)


// Write a function that prints out how many times it has been called.

// Hint: Can you do this using only local variables? 
// Think about what we talked about regarding variable scope. 
// Can you rely on the help of a global variable?

// function counter(){
// 	count++;
// }
// var count = 0;
// counter();
// console.log(count)











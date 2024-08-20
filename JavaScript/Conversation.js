let score="22abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
//Many time value type will be change but nahi hona chahiye so we check 
//it print value if returns NaN that means false 

// "33" =>33
// "33abc"=> NaN
// true => 1 false=> 0

let isloggedIn ="sumit"
let booleanIsLoggedIn = Boolean(isloggedIn)
console.log(booleanIsLoggedIn);

let someNumber=33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
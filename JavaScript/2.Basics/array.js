let a=[1,2,3,4,5,6,7]
console.log(a[1])

const myHeroes=["saktiman",'nagraj']
const myArr=new Array(1,2,3,4)
console.log(myArr[1]);

// Array Method
myArr.push(6)
myArr.push(7)
// not give any armugent to pop function he remove last number of the list
myArr.pop()

myArr.unshift(9)
// use unshift for add value in start
myArr.shift()
// shift mtlb pop()
console.log(myArr);

console.log(myArr.includes(9));
// includes()use for chech value hai yaa usme nahi
console.log(myArr.indexOf(3));
// indexof() use for return the position

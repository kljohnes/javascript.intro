let str_numb = 100
let x = 5
let y = 5.0
let z = Number('5')
let r = Number('test')
let cov_numb = Number(str_numb) 
// Creates a number from the indexed_string

console.table({x, y, z, cov_numb})
/*
Numbers:
Add +
Sub -
Multi *
Div /
Floor Div /
Math.floor (<div>) - chopped off at whole number
Exp **

MOD % <- Div and give back the remainder
*/

console.log(8 ** 2)
console.log(12 % 5)

console.log(5 / 2)
console.log(Math.floor(5/2))

let total = 0
let i = 0
while(i <= 1000){
    if(i % 2 == 0){
        console.log(i)
        total += i
    }
    i++
}
console.log(total)
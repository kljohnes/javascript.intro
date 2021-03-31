// For ... of loop
/*
legend:
    keyword = 'for'
    var = some temp word you use to refer to the current item
    collection = some collection you want to go through ex...Array or obj or string

NOTE: This is better usually for the arrays and strings if you want the items
<keyword>(<var> of <collection>){
    // Do something
}
*/

let students = ['Amy', 'Adam', 'Blake', 'Circe', 'Drew']
for (let student of students){
    console.log(student)
}

let alphabet = 'abcdefghijklmnopqrstuvwxyz'
for (letter of alphabet){
    console.log(letter)
}



let person = {
    name: "Justin",
    age: 28
}

for(let entry of Object.entries(person)){
    //console.log(property)
    console.log(entry) 
}

for(let [k, v] of Object.entries(person)){4
    //console.log(property)
    console.log(`${k}: ${v}`) // A good use for a for in loop
}
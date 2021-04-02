// While Loop
/*
legend: 
    keyword = while
    1 = some eval or expression that is true or false

<keyword>(<1>)    
    // Do something
}
*/

let i = 0
while (i <= 10){
    console.log(i)
    i++
}

for(let x=0; x<=10; x++){
    for (let y=0; y<=10; y++){
        console.log(x, y, x * y)
    }
} // This is the same result as above

while(true){
    console.log("Help this loop is always true")
    break;// What does this do?
}


let names = ['Justin', 'Adam', 'Kate', 'Jim', 'Amy']
for (let name in names){
    let curName = names[name]
    console.log(curName)
    if (curName == 'Kate'){ 
    break;
    }
}

// Break / Continue
let counter = -1
while(counter <= 20){
   counter++
   if (counter % 2 === 1) {
       continue // ? What is this 
    }
    console.log(counter)
}

for(let tmp=100; tmp>=0; tmp-=5 ){
    console.log(tmp)
}

let myStart = 100
while(myStart >= 0){
    console.log(myStart)
    myStart -= 5
}
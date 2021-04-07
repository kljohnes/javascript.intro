//Arrays
//-Arrays are used to store multiple values in a single variable
//-There are array methods that allow us to traverse, as well as mutate the data being stored within the array
//-Arrays are 0 indexed. first value will have an index of 0, and the last item will have an index of the array length - 1

let arr = ['first', 'second', 'third'];
console.log(arr[arr.length -1]);

let arr2 = Array(3);
console.log(arr.length);

// Foreach

let boardGames = ['Monopoly', 'Sorry', 'Risk', 'Clue'];

boardGames.forEach(function (game) {
    console.log(game)
});

// Methods

//Array.push()
// Add an element to the end of an array
let shoppingList = ['celery', 'limes', 'lemons', 'salt', 'oranges'];

console.log(shoppingList.push('salt'));
console.log(shoppingList);

//Array.pop()
// Removes the last element in our array and it'll return that element
let shoppingList = ['celery', 'limes', 'lemons', 'salt', 'oranges'];
console.log(shoppingList);

//Array.unshift()
// Adds a new element to the beginning of an array
let shoppingList = ['celery', 'limes', 'lemons', 'salt', 'oranges'];
shoppinhList.unshift('salt');
console.log(shoppingList);

//Array.shift()
//Remove the first from the array and return that element
let shoppingList = ['celery', 'limes', 'lemons', 'salt', 'oranges'];
shoppingList.shift();
console.log(shoppingList);

//Array.map()
// transforms the elements in the original array by calling the given function once for each element in the array
let shoppingList = ['celery', 'limes', 'lemons', 'salt', 'oranges'];
console.log(shoppingList.map(item=>item.toUpperCase()));

//Array.filter()
//Creates a new array with only the elements that pass the test in a given function
let shoppingList = ['celery', 'limes', 'lemons', 'salt', 'oranges'];
console.log(shoppingList.filter(item => item.startsWith('l')));

//Array.find()
//Returns the first element in an array that oasses a test given as a function.
let shoppingList = ['celery', 'limes', 'lemons', 'salt', 'oranges'];
console.log(shoppingList(item => item.startsWith('l')));
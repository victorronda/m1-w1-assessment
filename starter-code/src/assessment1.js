// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x*y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num%2==0){
    return true;
  } else {
    return false;
  }
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b){
    return a;
  } else {
    return b;
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b){
    if (a > c){
    return a;
    }
  } else if (b > c) {
    return b;
  } 
  return c;
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
if (numbers.length === 0) {
  return 0;
}
let sum=numbers.reduce((elem1,elem2)=> elem1+elem2);
  return sum;
}

// Return the largest number of a non-empty array
  function maxOfArray(numbers) {
  let orden=numbers.sort((a,b)=> a-b);
  return orden[orden.length-1]
 
 }

// Return the longest string in an array
function longestString(strings) {
  let longest="";
  for(let i=0;i < strings.length;i++) {
    if(strings[i].length > longest.length) {
      longest=strings[i];
    } 
  }
  return longest;
}


  



// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
let exist=wordsArr.indexOf(word);
if (exist !== -1) {
  return true
}
return false;

}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  
}


// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`; 
  
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  
}

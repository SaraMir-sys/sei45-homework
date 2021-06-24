// Array and Functions Bonus Material
//
//     Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.


const maxOfTwoNumbers = function(x,y){
  if (x===y) {
    console.log("are equal" + x);
  } else if (x>y) {
   console.log(x + " is larger");
  } else {
    console.log( y + " is larger");
  }
}

maxOfTwoNumbers(5,6)

//     Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function(x,y,z){
  if (x===y && y===z) {
    console.log("are equal" + x);
  } else if (x>y && x>z) {
    console.log(x + " is larger");
  } else if (y>x && y>z) {
    console.log(y + " is larger");
  } else if (z>x && y>y) {
    console.log(z + " is larger");
    }
}

maxOfThree(3,7,4)



//     Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const vowel = function(t){
    if (t = "a" || "e" || "o" || "i") {
    console.log("true")
} else {
    console.log("false")
  }
}
  vowel("b")




//     Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
const sumArray = function(B,T){
for (let i=0; i < B.length; i++){
   k=B[i]+T[i];
 }
console.log(k)
}

sumArray([2,2],[1,3])


// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const  reverseString= function(arr){
for (let i=arr.length; i >1; i--){
   console.log(arr[i]);
 }
}

reverseString["a", "b", "b", "c"]





// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
const findLongestWord = function(arr) {
		k === 0;
		for (let i = 0; i < arr.length); {
			t= arr[i].length;
			if (t > k) {
				k === t;
			}
		}
		Console.log(k)
}
  findLongestWord["brak","jamira"]



// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
const filterLongWords = function(arr,n) {
		if (arr.length>n);{
      Console.log(arr);
    }else{
      console.log("no is bigger");
  }
  }

  filterLongWords([2,3,5],2)




//Homework: The Word Guesser
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').

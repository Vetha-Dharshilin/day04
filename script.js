// Functions 

//a.printing odd numbers

function foo(array){
    for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
             console.log(array[i])
          } 
     }
  }
  console.log(foo([1,2,3,4,5,6,7,8,9,0]));


 //b. convert all the strings to title caps in string array

 function sentence (str) {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
 }
console.log(sentence("india is my country"));

// c.sum of all number in array

function a (array) {
   let sum = 0;
   for (var i in array) {
       sum += array[i]
   }
   console.log(sum)
}
a([20, 30, 40, 50, 60, 70, 80])

//d. return all the prime numbers in an array

function a (array) {
   var arr = []
   var number = 0
   for (let i = 0; i < array.length; i++) {
       number = array[i]

       function isPrime(n) {
           // Corner case
           if (n <= 1)
               return false;

           // Check from 2 to n-1
           for (let i = 2; i < n; i++)
               if (n % i == 0)
                   return false;

           return true;
       }
       if (isPrime(number) === true) {
           arr.push(number)
       }
   }
   console.log(arr)
}

a([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

//e. return all palondromes in an array

function isPalindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}

let str1 = "racecar";
let str2 = "nitin";
let str3 = "mobile";
let str4 = "rar";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
console.log(isPalindrome(str4));

//f. return median of two sorted arrays of the same size

 function a (array1, array2) {
    let arr = [...array1, ...array2]
    arr.sort(function (a, b) { return a - b });
    console.log(arr)
    if (arr.length % 2 === 0) {
        let median = (arr[(arr.length / 2) - 1] + arr[(arr.length / 2)]) / 2
        console.log(median)
    }
    else {
        let median = arr[arr.length / 2]
        console.log(median)
    }
}
a([1, 12, 15, 26], [2, 13, 17, 30])

//g. remove duplicate from an array

function a (array){
    let dup = [...new Set(array)];
    console.log(dup);
  }a([2,7,4,6,9,7,8,3,9])
  
//h.roatate an array by k times
                   
function  a (array1, k) {
    let rotatedarray = []

    for (let i = 0; i < array1.length; i++) {
        let newIndex = (i + k) % array1.length
        rotatedarray[newIndex] = array1[i]
    }
    console.log(rotatedarray)
}
a([11, 12, 13, 14, 15, 16, 17], 2)
  
  


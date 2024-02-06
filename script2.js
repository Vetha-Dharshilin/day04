// Arrow functions

// a.print odd numbers

 
var a = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            console.log(array[i])
        }
    }
}
a([1, 2, 3, 4, 5, 6, 7, 8, 9])

// b.convert all the strings to title caps in string array

var sentence = (str) => {
    str = str.toLowerCase().split(' ');
     for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
      
    
   return str.join(' ');
  
   }
   console.log (sentence ("india is my country"));

   //c.sum of all number in array

   var a = (array) => {
    let sum = 0;
    for (var i in array) {
        sum += array[i]
    }
    console.log(sum)
}
a([20, 30, 40, 50, 60, 70, 80])

//d. return all the prime numbers in an array

var a = (array) => {
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

let array = ["racecar", "hello", "123321","nitin"]
let arr1 = [];
let reverse = (str) => {
    return str.split("").reverse().join("")
}
for (var i = 0; i < array.length; i++) {
    var reversedarray = reverse(array[i])
    if (array[i] == reversedarray) {
        arr1.push(array[i])
    }
}
console.log(arr1)


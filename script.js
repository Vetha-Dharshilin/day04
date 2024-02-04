// Functions and IIFE

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

 
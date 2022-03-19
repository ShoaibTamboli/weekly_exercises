console.log("Hello This is week 4");

////////////////////////////////Immutibility//////////////////////////////////

// Question1: Take an object with your Mothers name and your age. Now create an object for your sibling by age differnce.

// const shoaib={mothername:"hafiza", age: 26}
// const sohel={...shoaib , age: shoaib.age-6}
// 
// shoaib
// {mothername: 'hafiza', age: 26}
// sohel
// {mothername: 'hafiza', age: 20}


// Question2: Take an Array with 5 colors. Create another array by adding two more colors to it.

// array1=["red", "blue","green","yellow","maroon"]

// array2=[...array1, "pink","purple"]



// above is immutibility. You dont change data you create a new copy


//--------------------------------------------------------------------------------------------------------------------
////////////////////////PURE FUNCTIONS///////////////////////////////////

// Questions: write a function birthday() to take a persons name and age in an Object and increase age.

//solution: const birthday=(person)=> ({...person, age: person.age + 1})

// Calling function for output : birthday(person={name: "Shoaib", designation: "developer", age: 29})

// To test above, below is tanays Solution for calling output:
// shoaibafterbirthday = birthday(shoaib)
    // {mothername: 'hafiza', age: 27}
// shoaib
    // {mothername: 'hafiza', age: 26}
// shoaibafterbirthday
    // {mothername: 'hafiza', age: 27}
// shoaib===shoaibafterbirthday
    // false


//------------------------------------------------------------------------------------------------
////////////////////////////////HOF/////////////////////////////////

// Question 1: write a function which can tell whether a number is less than 10 or not. Supply this function to Array.filter() to get an array with no 10s in it. (number less than 10)  (Array.Filter)

// Solution:
//  const numbers=[1,2,3,4,5,66,77,88,99]

// const ismore=(num)=> num>10 
// numbers.filter(ismore)


//Extra question by tanay: Question 2 : Given an array of numbers return an array with all numbers incrementing by 2. (MAP)

// Solution: numbers=[1, 2, 3, 4, 5, 66, 77, 88, 99]
// const incrementby2=(num)=> num + 2;
// const numbersincrementedby2= numbers.map(incrementby2)
//console.log(numbersincrementedby2)



//Question 3 : Given an array of numbers return an object foreach item.



// Question 4: Extra Question by Tanay:  [1,3,5,2,22,11,9] find the sum of odd number in the array.

// Solution: 
// const numbersarray=[1,3,5,2,22,11,9]

// const SumOdd=(sum,num)=> num%2===0 ? sum : num + sum;

// numbersarray.reduce(SumOdd,0)


// Question 5: Return an object with sum of Odd numbers and sum of even numbers.

// Solution: 
//const reduceobj=(oddevenobj,num)=> num % 2===0 ? {...oddevenobj, even: oddevenobj.even+num}: {...oddevenobj, odd: oddevenobj.odd+num}

// oddevenobj={odd: 0, even: 0}

//reduceobj(oddeveobj,2)
//for output: numbersarray.reduce(reduceobj,oddevenobj)


//--------------------------------------------------------------------------------------------------
//////////////////////////Currying/////////////////////

// Question 1: Create a function which takes your name and returns a function which would add your name to anything that function says/

// const nameLogger=name=>msg=>`${name} says ${msg}`

// const ShoaibLogger=nameLogger("Shoaib")

// ShoaibLogger("walcome to neoG")
// Output: 'Shoaib says walcome to neoG'


//-----------------------------------------------------------------------------------
////////////////////////Composition/////////////////////

// Question 1: Write a function which can log any text with your username. Another function which can write any text with your User ID. Now, compose both functions to give one function which can log any text with both username & User ID.

// Solution: 

// const useridlogger=msg=>`Shoaib Says, ${msg}`;

// const usernamelogger=msg=>`ID::12345 Says, ${msg}`

// const usernameAndIdlogger=usernamelogger(useridlogger("hello"))

// usernameAndIdlogger
// 'ID::12345 Says, Shoaib Says, hello'

//---------------------------------------------------------------------------

////HOMEWORK QUESTION/////////////
// Hint This exercise would need
// (a)Carrying
// (b) Redure
// (c) rest operator you don't know how many values can be passed to compare.

// Write a function compose (). which can take any number
// of functions and retum a function which will run. the given functions in order when called with an argument.


// const increment = num = num + 1
// const square = num = num * num;
// const incrementThenSquare = compose (increment, square);

// incrementThenSquare (2); //9

// Write this function compose as a util so that you can use it for all your functional programming needs.


//-------------------------------------------------------------------------------------------------------
///////////////////////Home work Questions.

// Question: Given an array of integers: numarray[1,2,3,4,5,66,77,88,99.1,3,5,6,7,8,9]
// 1) Find the sum of all odd. numbers.

// Solution: 
//const numarray=[10,20,30,40]
// const Odd=(sum,curr)=>curr%2===0? sum: curr + sum
// numarray.reduce(Odd,0)


// 2) Find the sum of all numbers at odd indices

// Solution: 
//const arr2=[1,2,3,4,5,6]
// const oddIndicesSum = (acc, currValue, currIndex) => (currIndex % 2 !==0) ? acc + currValue :acc
//  const output = arr2.reduce(oddIndicesSum,0);
//  console.log(output);


// 3) Find the biggest number in the array.

// Solution 1: Math.max.apply(null,arr)

//Solution 2: Math.max(...arr)

//Solution 3: const biggestNumber = (acc, curr) => (curr>acc)?curr:acc;
//  const output = arr.reduce(biggestNumber,0);
//  console.log(output);


// 4) Find the numbers. divisible by 10.

// Solution: 
// const arrray=[1,10,2,20,3,30]
// const divby5=(num)=> (num%5===0)? num : 0;
// const output2=arrray.filter(divby5)



// 5) Return an array of numbers where odd numbers are incremented by one and even numbers are decremented by one.

// Solution: const arr1=[1,2,3,4,5,6]
// const increment=(num)=>num%2===0? num-1 : num+1;
// const finaloutput=arr1.map(increment)

// 6) return an object with Sum of all odd numbers and even numbers separately. 

// Solution: const arr1=[1,2,3,4,5,6,7,8,9,0,50,51]
// const InitialObj={even:0, odd: 0}
// const objevenoddSum=(InitialObj,num)=> num%2===0 ? {...InitialObj, even: InitialObj.even+num} : {...InitialObj, odd: InitialObj.odd+num}
// const output=arr1.reduce(objevenoddSum,InitialObj)
// output // {even: 70, odd: 76}


// 7) Given an array of string  Find the number of Strings with similar number of characters.
// const input = ["apple", "orange", "mango","papaya"]
// Output : { 5:3, 6:1}

// solution 1: 
// const similarChar = (acc, curr) => {
//     if(curr.length in acc)
//      {
//     acc[curr.length]++;
//      }
//      else
//     {
//      acc[curr.length] = 1;
//      }
//       return acc;
//      }
//      const output = input.reduce(similarChar, {});
//     console.log(output);


// 8) return an array with strings which have vowels.
// const input = ["apple", "orange", "mango","papaya"]


//Solution 1: const wordsplay=["apple","dry","banana","rythm","fry","dio"]
// const vowelfilter=(chars)=>chars.match(/[aeiou]/gi)?char:0
// wordsplay.filter(vowelfilter)


//Solution 2:
//   const words1 = ["hello", "rhythm", "nice", "suspense", "thrill"];
//   const checkContainsVowels = (prev, curr) => {
//   let allVowels = /[aeiou]/gi;
//   if (curr.match(allVowels)) prev.push(curr);
//   return prev;
//   };
//   const containsVowels = words1.reduce(checkContainsVowels, []);
//   console.log(containsVowels);

// 9) Return an array of objects with key as item and value as number of characters in the string.
//const input = ["apple", "orange", "mango","papaya"]

//Solution: 
// const input = ["apple", "orange", "mango","papaya"]
// const op=input.reduce((acc,curr)=>({ ...acc,[curr]:curr.length}),[])  ///will return output in object.

//const op=input.reduce((acc,curr)=>[ ...acc,{[curr]:curr.length}],[])  ////will return output in array.


//------------------------------------------------------------------------------------

//////////////////////The home work///////////////////

//Question: Write a function compose (). which can take any number of functions and retun a function which will run the given functions in order when called with an argument.

// Dummy Example
// const increment = num => num + 1
// const square = num => num * num;
// const incrementThenSquare = compose (increment, square);

// increment Then Square (2); //9

//Solution for dummy: 
// const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x)

// const increment = num => num + 1
// const square = num => num * num;

// const incrementThenSquare = compose(increment, square);

// incrementThenSquare(5)


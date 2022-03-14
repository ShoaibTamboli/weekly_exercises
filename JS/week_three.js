console.log("This is week 3 Async JS exercises")

// ex2: write your own function which takes a callback
// challenge
// Write a function strLength() which takes

// 1) Your name
// 2) A function which it will call with the length of your name
// Now, call this function with the two parameters.

// 1) Your name. This is simple.
// 2) A function. This function will get the length of the string. Use that length to print a message: OMG! my name is X char long!


// function strLength(getname, getnamelengthcb){

//     const getnamelength=getname.length;
//     getnamelengthcb(getnamelength)
// }

// const printlength=(abc)=>{console.log(`my name is ${abc} char long`)}

// printlength(9)
// strLength("Shoaib",printlength)


//Solution with using Arrow function 
// const strLength=(inputName,lengthcallback)=>{

//     const lengthcounter=inputName.length;
//      lengthcallback(lengthcounter)
// }


// const printlength=(a)=>{console.log(`The length of your name is ${a} character`)};

// strLength("Shoaib",printlength)

// live ex3: function which takes two callbacks

// challenge
// Write a function willThanosKillMe() . This function will take three parameters

// 1) Your name
// 2) Function to call if Thanos doesn't kill you.
// 3) Function to call if Thanos does kill you.
// This function will call success callback if your name has even characters. You won't die.

// But if your name has odd number of characters then you're going to die. Sorry! :(

// Now, call this function with the given parameters. The success function should console a happy message: Yay! I am alive! and the failure function should console your will: Give my bose speakers and apple headphones to my sister

// function willThanosKillMe(name,Live,NotLive){

//     const getnamelength=name.length;

//     if(getnamelength %2 ==0){
//         Live()
//     } else{
//         NotLive()
//     }
// }

// function success(){

//     console.log("you are alive")
// }

// function fail() {

//     console.log("you are defaeted")
// }

// willThanosKillMe("Shoaaib", success, fail)


// ORIGINAL SOLUTION BY TANAY

// const willThanosKillMe=(name,Live,NotLive)=>{ 
//     if(name.length % 2 ===0){
//        Live()
//     }   {NotLive()
//     }
// }

// const Live=()=>{console.log("Yay!! this is live")}

// const NotLive=()=>{console.log("Yay!! this is NOTlive")}

// willThanosKillMe("Shoaib",Live,NotLive)


// ex4: use setTimeOut()
// challenge
// Learn how to use setTimeout()
// Now, write a function that takes a message and a delay and print that message after the delay.


// function printafterdelay(msg, delay){
// setTimeout(function (){
//     console.log(msg)
// },delay);
// }

// printafterdelay("Hello",5000)

// live ex5: predict outputs#
// Put your answers in chat for every question.

// setTimeout(() => console.log('A'), 0)
// setTimeout(() => console.log('C'), 0)
// setTimeout(() => console.log('B'), 0)    //A C B


// setTimeout(() => console.log('A'), 1000)
// setTimeout(() => console.log('B'), 400)
// setTimeout(() => console.log('C'), 1300)  // B A C


// console.log('A')
// setTimeout(() => console.log('B'), 0)
// console.log('C')  // A C B

// h/w ex6: setInterval#
// challenge#
// learn how setInterval works
// 6.1 write a function which takes a message and time. The function should print that message every X interval.
// 6.2 Write a function that takes a number. Then print a countdown from that number to 0. At zero print "Bang Bang!" ← The important question is sometimes asked in FAANG interviews as well.

// function messageandtime(msg,time){
// setInterval(function (){
//     console.log(msg)
// }, time);

// }
// //messageandtime("This is a message after interval",5000)

// function Inputnumber(int){
//     num=int;

//     while(num>=0)
//     {
//         print(num)
    
//         num=num-1
//         }console.log("Hello")
// }
// Inputnumber(6)

// h/w ex10: understand promise constructor#
// Tanay has made a fakeFetch implementation for the class.

// Understand how to make your own promises and make your own version of fakeFetch(). Discuss this with your team.


// function fakeFetch(msg, shouldReject) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (shouldReject) {
//           reject(`error from server: ${msg}`)
//         }
//         resolve(`from server: ${msg}`)
//       }, 3000)
//     })
//   }

// By Shoaib

// function nakliFetch(msg, karoReject){

//     return new Promise((resolve, reject) =>{setTimeout(()=>{

//         if(karoReject){
//             reject(`Server Rejected ${msg}`);
        
            
//         }{
//     resolve(`Message is from Server ${msg}`);}
        
//     },1000);
//      })
// }

// nakliFetch("Hello Shoaib",true)


// live ex11: print data on success#
// challenge#
// use the fakeFetch() to get data and show on success.

// Solution : How do you call a Promise?
// Solution : fakeFetch("Hello Shoaib").then(data=>console.log(data))


// live ex12: print data on success, print error on failure#
// challenge#
// Call fakeFetch(msg, true) to get a rejected promise. Handle the error with the error handler. Show a message using console.error for errors.

// Solution: 
// function successhandler(data){
//     console.log(data)
// }

// function errorhandler(err){
//     console.error(err)
// }
// fakeFetch("Hello Shoaib ",true).then(successhandler).catch(errorhandler)

// live ex13: chaining#
// challenge#
// Create a function getServerResponseLength(msg) This function will use fakeFetch() internally with the message and return the length of the response received by the server.

// Note: Instead of returning the response from the server this should return the length.

// Hint: It will return in a promise.


// Solution: function returnlength(a){
//     return  fakeFetch(a).then(bata=>bata.length)
//  }

//  returnlength("hello")

//  Output: will return a promise.

// understanding#
// Whatever you return from .then() also becomes a promise. And this is how the chain propagates.


// live ex14: waterfall data#
// challenge#
// Write a function syncCallsToServer(msg1, msg2) which will take two messages and call fakeFetch() with the second message only when the first message has returned from the server.

// Solution: 
// const syncCallsToServer=(msg1, msg2)=> fakeFetch(msg1).then(dataformsg1=>fakeFetch(msg2).then((dataformsg2)=>console.log({dataformsg1,dataformsg2})))


// understanding#
// Think of this as a situation where you need to get userID from the server to get the order data for the user. You would need userID as part of the query to get order. How would you do that?


// parallelcallstoserver

// const parallelcallstoserver=(msg1,msg2)=>{

//     fakeFetch(msg1).then(dataformsg1=> console.log({dataformsg1}))
//     fakeFetch(msg2).then(dataformsg2=> console.log({dataformsg2}))
// }



// async-await
// Nothing but promises which look better.

// Two best practices to keep in mind:

// Use async-await as much as possible.
// Always take care of the error handling as well.

// async function printDataFromServer() {
//     const serverData = await anyPromiseWhichWillReturnData() // .then(data => { sksksksksksk(), sjskssks()})
//     console.log(serverData);
//   }
  
//   // notice that function need an `async` keyword.
  
//   // Doing this in es6 arrow function would be
  
//   const printDataFromServer = async () => {
//       try {
//           const serverData = await anyPromiseWhichWillReturnData();
//         console.log(serverData);
//       } catch (err) {
//        console.error(err)
//       }
//   }
  
  /**
  Note: In arrow the async keyword is used before the ().
  While in normal functions, it is used before the `function` keyword itself.**/

// live ex15: use async-await with fakeFetch#
// challenge#
// Given the syntax above. Call fakeFetch() with some msg and use await to get the data and then print it.


// async function printDataFromServer(msg) {
//     const serverData = await fakeFetch(msg) // .then(data => { sksksksksksk(), sjskssks()})
//     console.log(serverData);
//   }

// printDataFromServer("hello") 

// Tanay's Solution
// const printdata=async ()=>{

//     data=await fakeFetch("hola")
//     console.log(data)
// }

// live ex16: use async-await to do waterfall#
// challenge#
// Do question number 14 with async-await this time.

// Solution: async function asyncdatacall(msg1, msg2){

//     dataformsgone=await fakeFetch(msg1)
//     dataformsgtwo=await fakeFetch(msg2)
    
//         console.log({dataformsgone, dataformsgtwo})
    
//     }
    


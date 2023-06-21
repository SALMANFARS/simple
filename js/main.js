// function fibonachi(n){
//     if(n<2){
//         return n
//     }
//     return fibonachi(n-1)+fibonachi(n-2)
// }
// console.log(fibonachi(5));



// //task1
// function isEmpty(num){
//     if(num ===""){
//         return true 
//     }
//     return false
// }
// console.log(isEmpty(""))


// //task2
// function concatName(furstname, latsname){
//     const result = furstname.concat(", ",latsname)
//     return result;
// }

// console.log(concatName("First","Last"))


// task3

// function oddOrEven(num){

//     if(num.length%2==0){
//       return true 
//     }
//      return false
 
// }
// console.log(oddOrEven("place"));


//task4

// function isLastCharacterN(num){
//     let letter = "n";
//     let isubstring = num.at(-1)
// console.log(isubstring)
//     if(isubstring==letter){
//         return true;
//     }
//     return false  
// }
// console.log(isLastCharacterN("Aide"))


// //task5


// function repeatString(str,num){
      
//     if(typeof(str)===`string`){
//         return str.repeat(num);
//     }
//     else 
//     return "Not A String !!!"

// }

// console.log(repeatString("Sasalman",7));


// task6
// function capitalLetters(str){
   
//    let newstr = "";
//     for(let i = 0; i<str.length;  i++ ){
//       if( str[i] === str[i].toUpperCase() ){
//         newstr += str[i];
//       }
//     }
//     return newstr.length;
// }

// console.log(capitalLetters("mqeytbbjwqemcdrdsyvq"));

// task7

// function calculate(str1, str2, str3){
   
//     if(str3 == "+"){
//         return str1  + str2;
//     }
//     else if(str3 == "*"){
//         return str1  * str2;
//     }
//     else if(str3 == "/"){
//     return str1  * str2;
// }

// return str1  % str2;

// }
// console.log(calculate(4,9,"+"))
// console.log(calculate(6,3,"*"))
// console.log(calculate(14,3,"%"))

// task8

// function numberSyllables(str){
//     return  str.split('-').length
// }
// console.log(numberSyllables("buf-fet"));
// console.log(numberSyllables("beau-ti-ful"));
// console.log(numberSyllables("on-o-mat-o-poe-ia"));   

//task9

// function evenOddString(str){
//     let newString = "";
//     let newString2 = "";
//     for(let i = 0; i < str.length; i++){
//      console.log(str[i])
//        if(i%2==0){
//         newString+=str[i];
//        }
      
//        else  newString2+=str[i];
       
//      }
//      return newString + " " + newString2
// }

// console.log(evenOddString("mubashir"));
// console.log(evenOddString("edabit"));
// console.log(evenOddString("airforce"));




// //task10 ???
// function potatoes(str){
//     let cnt = 0;
//     let isiplit = str.split("," 0)
//     console.log(isiplit);
//     if (str =="to"){
//         cnt++;
//     }
//    return cnt;
// }

// console.log(potatoes("potatopotato"))

//task11
// function capitalLetters(str){
   
//        let newstr = "";
//         for(let i = 0; i<str.length;  i++ ){
//           if( str[i] === str[i].toLowerCase() ){
//             newstr += str[i];
//           }
//         }
//         return newstr;
//     }
    
//     console.log(capitalLetters("UcUNFYGaFYFYGtNUH"));
//     console.log(capitalLetters("bEEFGBuFBRrHgUHlNFYaYr"));
//     console.log(capitalLetters("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));

//task12

// function giveMeSomething(str){
//  let kalima = "Something";
//   let newkalima = kalima.concat(" ",str)
//   return newkalima;
// }
// console.log(giveMeSomething("str"))


//task 13

// function BoolToString(str){
//      if(0=="true") return "true"
//     return "false" 
// }

// console.log(BoolToString("true"))


// //home task1 

// function modifyLast(str, num){
//   let lastletter = str.at(-1)
//   lastletter =lastletter.repeat(num-1) ;
//   return str +=lastletter;
// }

// console.log(modifyLast("hey",6));


// // //home task2
// function  firstLast(str){
//     let firstletter = str.at(0);
//     let lastletter = str.at(-1);
//     return firstletter + lastletter;
// }

// console.log(firstLast("ganesh"));
// console.log(firstLast("shiva"));
// console.log(firstLast("vishnu"));


// // task 3 ???

function tostr(str){
    let newstr = Number(str);

   return newstr; 
}

console.log(tostr("123"));

function toNum(num){
    let newNum = toString(str);

   
   console.log(typeof(newstr));
}

console.log(tostr(55));


//task 4


// function isPlural(str){
//      return 

    
// }
// console.log(isPlural("changes"));



// let result = Math.random()*100;
// console.log(result)



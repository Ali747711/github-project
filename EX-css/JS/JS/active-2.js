// alert ('Salom dunyo!');
// alert('Mening ismim Azamat')


// const ism='Azamat';
// console.log(ism);
// const yosh='21';
// console.log(Number(yosh)+1);

// const yosh = 18;
// const a = yosh > 18; // true
// const b = yosh < 20; // true

// // AND operatori
// console.log(a && b); // true

// // OR operatori
// console. log(a || b); // true

// // NOT operatori 
// console.log(!a); // false 
// console.log(!b); // false

// const htmlPassed = false;
// const CssPassed = true;
// let message;
// if (htmlPassed && CssPassed) {
//          message = 'Siz Bootstrap kursini boshlashingiz mumkin!';
// }

// else if (htmlPassed || CssPassed) {
//          message = 'Iltimos ikkinchi kursni ham tugating!';
// }

// else {
//          message = 'Iltimos birinchi ikkala kursni tugatib chiqing!';
// }

// console.log(message);

// console.log('Men ' +2003+' chi yilda tavallud topganman');
// console.log('30'-'20'+10);

// function meningFunksiaym(son1, son2, son3){
//         return son1*son2-son3;
//        }
//         console.log(meningFunksiaym(10,20,30));


// //Function Declaration

// function toqorJuft(number){
//          if(number % 2 ===0){
//                   console.log('${number} is even');
//          } else{
//                   console.log('${number} is odd');
//          }
// }
//          toqorJuft(4)
//          console.log('Nabiev Azamat');
//          console.log('Nabiev Azamat');


//Functioln expression

// const toqorJuft = function(number){
//          if(number % 2 ===0){
//                   console.log('${number} is even');
//          } else{
//                   console.log('${number} is odd');
//          }
// }

// toqorJuft(4);


// //Arrow function

// const toqorJuft = number => {
//          if(number % 2 === 0){
//                   console.log(`${number} is even`);
//          } else{
//                   console.log(`${number} is odd`);
//          }
// }

// toqorJuft(4);



//Function Declaration


// function kattaSon(number1, number2){
//          if (number1 >= number2){
//                   return number1
//          } 
//                   return number2
// }

// console.log(kattaSon(4,9));


// Arrow function


// const kattaSon= (number1, number2) => {
//          if(number1 >= number2){
//                   return number1 ;
//          }
//                   return number2 ;
// }

// console.log(kattaSon(6,17));


// //Function expression


// const kattaSon = function(number1, number2){
//          if(number1 >= number2){
//                   return number1
//          }
//                   return number2
// }

// console.log(kattaSon(24,16));


// //Function declaration
// function teskariSon(son){
//          const sonStr =String(son);
//          const sonRev =sonStr.split('').reverse().join('');
//          return Number(sonRev);
// }

// console.log(teskariSon(20030726))

// // Function expression
// const teskariSon = function(number){
//          const numberStr =String(number);
//          const numberRev =numberStr.split('').reverse().join('');
//          return Number(numberRev);
// }
//          console.log(teskariSon(7477));

// // Arrow function
// const teskariSon = number => {
//          const numberStr=String(number);
//          const numberRev=numberStr.split('').reverse('').join('');
//          return Number(numberRev);
// }

// console.log(teskariSon(1234));

//Array creation

// const languages =['js','java','go'];
// console.log(languages);

// const language =new Array('java','js','k','go');
// console.log(language);


// const myName = new Array('A','Z','A','M','A','T')
// console.log(myName)
// console.log(myName[3]);

//  let myName =['java','js','go','css']
//  console.log(myName);

//  myName.push('html'); 
//  console.log(myName);

//  myName.unshift('phython');
//  console.log(myName);

// const myName = ['js', 'java','go']
// console.log(myName);
// myName.push('azamat');
// myName.unshift('nabiev');
// console.log(myName);
// myName[0] ='azamat';
// myName[6] ='nabiev';
// console.log(myName)

//////////////////////////

// var myName = ['js', 'java','go','swift'];

// const deletedLanguage =myName.pop();

// console.log(myName);
// console.log(deletedLanguage);


// let myName = ['js', 'java','go','swift'];

// const deletedLanguage = myName.shift();
// console.log(myName);
// console.log(deletedLanguage);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[3];
// console.log(fruits)


///////////////////////////////////


// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren = arr1.concat(arr2, arr3);

// console.log(myChildren)

// delete myChildren[5];
// console.log(myChildren);

// myChildren.pop();
// console.log(myChildren);

// myChildren.shift();
// console.log(myChildren);

// myChildren[1]='Azamat';
// console.log(myChildren)




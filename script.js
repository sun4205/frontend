console.log('hi')
console.log('David'[2]);
console.log('hello world'[10]);


let str = 'David'
console.log(str.length-1)

let fullName = 'hanna';

let celsius = 10;
let fahrenheit = celsius * 1.8 +32;
console.log(fahrenheit);

let cash = 20;
let price = 50;
let difference = cash -price;

if(cash>price){
    console.log(`you paid extra - here is ${difference}`);
} else if(cash ===price){
    console.log("you paid exact amount");
}else {
    console.log(`not enough money. you still owe${difference*-1}`);
}

let subscribed = true;
let loggedIn = true;

let st = subscribed && loggedIn ? 'show the video' : ' hide the video'

console.log(st);

let money = 50;
let product = 40;
let isStoreOpen = true;

let result = money>product && isStoreOpen ? 'give reciept' : 'do not give reciept'

console.log(result);

let count = 1;



//for(i=0; i<3; i++){
   // console.log(i);
//}

for( let i=1;  i<=20; i++){
    if(i %3===0 && i % 5 ===0){
        console.log(`${i} ->Frontend Simplified`)}
    else if(i % 3===0){
        console.log(`${i} ->Frontend`);
    } else if (i % 5 ===0){
        console.log(`${i} ->Simplified`);
    } 
    else {
        console.log(`${i} ->${i}`);
    }
        
}
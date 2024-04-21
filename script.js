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
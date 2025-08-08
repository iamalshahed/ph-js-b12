// odd number using for

/*
for(let i = 1; i <= 20; i++){
    if(i % 2 === 1){
        console.log(i);
    }
}
*/

// using not equals to
/*
for(let i = 1; i <= 20; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}
*/

/*
for(let i = 1; i <= 20; i+=2){
    console.log(i);
}
*/

// 1 - 30 divisible by 5
/*
for(let i = 1; i <= 30; i++){
    if(i % 5 === 0){
        console.log(i);
    }
}
*/

// 3 diya othoba 5 diya using or operator

/*
for(let i = 1; i <= 30; i++){
    if(i % 3 === 0 || i % 5 === 0){
        console.log(i);
    }
}
*/

// using && operator

/*
for(let i = 1; i <= 30; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i);
    }
}
*/

// give me the sum of numbers from 1 to 20 that are divisible by 3
let sum = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
    sum = sum + i;
    console.log("sum:", sum);
  }
}
console.log('total of sum numbers:', sum);
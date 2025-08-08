const sentence = 'I am learning web dev';

let reverse = '';
for(let i of sentence){
    // console.log(i);
    reverse = i + reverse;
}
// console.log(reverse);

let rev = '';
for(let i = 0; i < sentence.length; i++){
    // console.log(i);
    // console.log(sentence[i]);
    let sen = sentence[i];
    rev = sen + rev;
}
console.log(rev);

let revs = sentence.toUpperCase().split('').reverse().join('');
console.log(revs);
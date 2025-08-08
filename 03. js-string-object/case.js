const school = 'RAJ UK Uttara Model School';

console.log(school);
console.log(school.toLocaleLowerCase());
console.log(school.toUpperCase());

const subject = 'Chemistry';
const book = 'ChemIsTry';

if(subject.toLowerCase() === book.toLowerCase()){
    console.log('I am reading book eibar porikkhai fatai felmu');
}else{
    console.log('Hudai hudai pristha ultai ar vat khawar jonno');
}

const drink = ' water';
const liquid = '   water  ';

if(drink.trim() === liquid.trim()){
    console.log('panir opor name life');
}else{
    console.log('somudre pani ase but khaite pari na');
}
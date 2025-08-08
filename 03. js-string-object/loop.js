const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
    isNew: true,
};

// for of: array
// for in: object
for(let i in mobile){
    console.log(i);
    console.log(mobile[i]);
}
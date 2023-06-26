let arr = [
    [{a: {price: 20}}],

    [{a: {price: 35}}],

    [{a: {price: 44}}],
];

let total = arr

console.log( 
    total[0][0].a.price + total[1][0].a.price + total[2][0].a.price 
    );
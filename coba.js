function add (a, b){
    return(a+b);
}

console.log(add(35, 100));

function mull (a, c) {
    return(a*c);
}

console.log(mull(100, 9));

const greet = (nama) => {
    console.log('salam, ${nama}');
}

salam('hilmi');

//convert to arrow fungtion

const salam = (nama) => {
    console.log('Assalamualaikum, ${nama}');
}

greet('hilmi');
greet('aulia');
greet('arsad');
greet('setunggal');
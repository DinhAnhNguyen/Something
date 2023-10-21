function tinhTong(a,b){
    console.log(a+b);
}
tinhTong(5,8);

const tinhTong2= (a,b)=>{
    return a+b;
}
const ketqua= tinhTong2(5,9)
console.log(ketqua);

const array=[2,3,4,5]
console.log(array)
const array2= array.map((number)=>{
    return number+1;
})
console.log(array2)
console.log(array)

const array4= array.filter((number)=>{
    return number % 2==0 
})
console.log(array4)

var language = ['javascript','HTML','CSS'];
const array5= language.forEach((language)=>{
    console.log(language)
})

const ar1 = [1,'a',5,'2',];
const ar2 = arr1.filter((number)=>{
    if(typeof number === 'number')
        return number
})
console.log (arr2)

const products = [
    { name:'a', price: 1000, quantity: 10 },
    { name:'b', price: 2000, quantity: 5 },
    { name:'c', price: 1500, quantity: 2 },
    { name:'d', price: 100, quantity: 20},
];
    let price = 0
const tinhtong= products.forEach((product)=>{
    const tong= product.price * product.quantity;
    price = price + tong
})
console.log(price) ;

const scores = [80,95,75,60,85];
const scores1= scores.filter((number)=>{
    if (number > 70)
    return number;
    
})

let numbers=[]
const num1=scores.forEach((num)=>{
    if(num >70){
        numbers.push(num)
    }
})
console.log(numbers)

let age=10;
age=11;
console.log(age)





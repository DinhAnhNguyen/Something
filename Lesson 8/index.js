const m = [1, 2, 3, 4, 5, 6, "hh", "9", 80 , 100];
const m2 = m.filter(item => typeof item === 'number')
const squaredArr = m2.map(item => item * item);
console.log(squaredArr);

const arr = [5 ,6 ,7 ,3 ,4 ,2 ,11 ,12];
const arr2 = arr3.sort((a, b) => {
    return b - a;
})
console.log(arr2[1]);
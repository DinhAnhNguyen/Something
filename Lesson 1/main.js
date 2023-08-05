const arrNumber = [1,2,3,4,5];
const student = {
    name: "Quang",
    age: 18,
}
arrNumber.push(6);
console.log(arrNumber);
student.school = 'Vin';
console.log(student);

function log() {
    console.log(student.name);
    const tmp = 1;
}

const log1 = (name, age) => {
  console.log(`Ten: ${name}, tuoi: ${age}`);
}
 
log1("Quang", 18)

const count = (a, b) => a + b;


const result = count(3,4);
console.log(result);

const arr1 = [1,2,3];
const arr2 = [...arr1, 4];


console.log(arr1);
console.log(arr2);

const obj1 = {
    name: 'A',
    age: '23'
}

const obj2 = {...obj1, school: 'vin'};
console.log(obj1, obj2);

const arr3 = [1,2,3,4,5]
arr3.forEach((item) => {
console.log(item);
})

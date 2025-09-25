const student={
    name:"Maidul",
    age:26,
    address:"Beijing",
    Id:2023030077
}
// Destructure value from object
// const {address,age,name:studentName,Id}=student;
// // console.log(studentName,address,age,Id);
// console.log(`Student Name: ${studentName}, Age: ${age}, ID: ${Id}, Address: ${address}`)


// Nested Destructure
// const data={
//     profile:{
//         email:"useremail@gmail.com",
//         name:"Username"
//     }
// }
// console.log({profile}=data);

// Spread and rest operator
// const arr=[1,2,3,4,4,5,5,5,,5];
// const [,second,, fifth, ...rest]=arr;
// console.log(second,fifth,...rest);

function addNumber(...number){
    return number.reduce((acc,cur)=>acc+cur,0);
}
console.log(addNumber(1,2,3,4,5));
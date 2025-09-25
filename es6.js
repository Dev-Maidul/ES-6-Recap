const student={
    name:"Maidul",
    age:26,
    address:"Beijing",
    Id:2023030077
}
// Destructure value from object
const {address,age,name:studentName,Id}=student;
console.log(studentName,address,age,Id);
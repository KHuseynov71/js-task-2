const elnur ={
    firstName: "Elnur",
    lastName:"Azizov",
    salary: 350,
};
const kamran ={
    firstName:"Kamran",
    lastName : "Huseynov",
    salary:1000,
};
const eli ={
    firstName:"Eli",
    lastName : "Abbasov",
    salary:300,
};
const veli ={
    firstName:"Veli",
    lastName : "veliyev",
    salary:1500,
};
const namiq ={
    firstName:"Namiq",
    lastName : "Huseynov",
    salary:2500,
};
const employees =[elnur,kamran,eli,veli,namiq]

const sum= function (callBack) {
    let plural = callBack +plural;
    return plural;
}
function avearge (number, index){
    return number/index;
}
function forEach(arr){
    (function (arr){
        for (let index = 0; index < arr.length; index++) {
            let callBack = arr[index].salary;
            let number=sum(callBack);
            if (index<arr.length) {
               return avearge(number,index);
            };
        };
    });
};
console.log(forEach(employees));

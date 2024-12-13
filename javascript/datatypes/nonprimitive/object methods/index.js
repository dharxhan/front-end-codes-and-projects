let emp = {
    eName : "suraj",
    eAge : 25,
};
//Object.freeze(emp);
Object.seal(emp);

emp.eName = "RaviTeja";
emp.epin = 560001;
console.log(emp);

console.log(Object.keys(emp));
console.log(Object.values(emp));
console.log(Object.entries(emp));

//call,apply,blind(akshaysaini)
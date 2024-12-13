let emp = {
    eName : "Kadhiravan",
    eAge : 21,
    ePlace : {
        eCity: "Bangalore",
        eStreet : "BTM",
    },
};
console.log(emp,typeof emp);
console.log(emp.eName);
console.log(emp.ePlace.eStreet);

emp.ePlace.ePin = 560001;
console.log(emp);




function stu(name,age) {
    this.name =name;
    this.age =age;
}
let s1 = new stu("Varun" , 24);
let s2 = new stu("Netaji", 25);
console.log(s1);
console.log(s2);


let hero = new Object();
hero.name = "Vignesh";
hero.age = 26;
console.log(hero);
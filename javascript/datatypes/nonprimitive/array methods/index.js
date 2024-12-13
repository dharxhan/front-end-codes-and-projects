let a = [1,2,3,4,5];

//Adding data at last index
let b= a.push(6,7);
console.log(a);

//Remove data at last index
let c= a.pop();
console.log(a);

//Adding data at starting index
let d= a.unshift(0);
console.log(a);

//Remove Data at starting index
let e= a.shift();
console.log(a);

//Extract value from an array
let f= a.map((v,i) => {
    console.log(i);
});

let ff= a.map((v,i) => v*2);
console.log(ff);

//Removing unwanted things 
let g= a.filter((v,i) => v>4);

//Accumulated a value(complete array comes in a single value)
let h = a.reduce((p,c) =>{
    return p+c;
});
console.log(h);

//It will return the first value
let i= a.find((v,i) => v > 4);
console.log(i);

let j=a.every((v,i) => v > 5);
console.log(j)

//for in fetch only index
for (const arr in a) {
    console.log(arr);
}

//for of fetch only values
for (const arr of a){
    console.log(arr)
}

//for each fetch both index and value
let k = a.forEach((v,i) => {
    console.log(`${v}==${i}`);
});

//for each never returns an array
let kk = a.forEach
((v,i) => v*2);
console.log(kk);

//reversing an array
let l = a.reverse();
console.log(l);

//convert array into string
let m = a.join();
console.log(m);

let x=prompt("Enter a string:");
let y=x.split("").reverse().join("");
if (x === y){
    console.log("Yes palindrome");
}else {
    console.log("Not");
}
console.log(y);
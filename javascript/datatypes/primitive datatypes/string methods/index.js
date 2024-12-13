let a = "hello world";
console.log(a.length);

let b=a.charAt(6);
console.log(b);

let c=a.charCodeAt(0);
console.log(c);

let d= a.toUpperCase();
console.log(d);

let  e=a.toLowerCase();
console.log(e);

let f=a.startsWith("Hello");
console.log(f)

let g=a.endsWith("d");
console.log(g);

let h=a.indexOf("e");
console.log(h);

let i=a.includes("i");
console.log(g);

let j=a.slice(0,4);
console.log(j);

let k=a.repeat(10);
console.log(k);

let l=a.replace("hello", "Hii");
console.log(l);

let m=a.split();
let n=a.split("");
let o=a.split(" ");

console.log(n);
console.log(m);
console.log(o);

let x=prompt("Enter the name");
let y=x.charAt(0).toUpperCase();
let z=x.slice(1,);
console.log(y.concat(z));
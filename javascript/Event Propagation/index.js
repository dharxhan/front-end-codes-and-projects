let grandParent = document.getElementById("grandParent");
grandParent.addEventListener("click", () => {
    grandParent.style.background = "red";
});

let Parent = document.getElementById("parent");
Parent.addEventListener("click", () => {
    Parent.style.background = "green";
});

let child = document.getElementById("child");
child.addEventListener("click", () => {
    child.style.background = "yellow";
});
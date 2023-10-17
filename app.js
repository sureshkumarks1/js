let names = ["suresh", "manu", "sanu"];

let kitchenitemselect = document.querySelector(".kitchenitemlist");
let allli = document.querySelectorAll("li");
//console.log(allli);
// allli[0].innerText = names[0];
/*
for(let powder of names){
    let li = document.createElement("li");
    li.innerText = powder;
    kitchenitemselect.appendChild(li);
    console.log(powder);
}
*/
names.forEach(function(powder){
    console.log(powder);
});
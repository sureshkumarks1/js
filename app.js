
let kitchenItemSelect = document.querySelector(".kitchenitemlist");
let kitchenInput = document.querySelector(".kitcheninput");
let submit = document.querySelector(".submit");

function valueFromDom(){
    let kitchenInputData = kitchenInput.value;
    let li = document.createElement("li");
    li.innerText = kitchenInputData;    
    kitchenItemSelect.appendChild(li);
    kitchenInput.value = "";
    // console.log(li);
    
}

submit.addEventListener("click", valueFromDom);




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

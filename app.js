
let kitchenItemSelect = document.querySelector(".kitchenitemlist");
let kitchenInput = document.querySelector(".kitcheninput");
let submit = document.querySelector(".submit");
let listOfItems = [];

function valueFromDom(){
    
    let kitchenInputData = kitchenInput.value;
    
    let li = document.createElement("li");    
    li.innerText = kitchenInputData;        
    kitchenItemSelect.appendChild(li);    
    kitchenInput.value = "";
    kitchenInput.focus();
    
    let trashBtn = document.createElement("i"); 
    kitchenItemSelect.appendChild(trashBtn);    
    trashBtn.classList.add('fas','fa-trash');
    li.appendChild(trashBtn);    
    li.style.cssText = 'animation-name: slideIn';

    // console.log(trashBtn);    
}

submit.addEventListener("click", valueFromDom);
kitchenInput.addEventListener('keypress', function(event){
    if(event.key ==='Enter'){
        event.preventDefault();
        document.querySelector(".submit").click();
        
    }
});






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

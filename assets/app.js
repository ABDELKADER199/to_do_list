let input = document.querySelector('.subject input');
let add = document.querySelector('.subject button');
let your_list = document.querySelector('.list');




add.addEventListener("click",() =>{
  value = input.value;
    your_list.innerHTML +=`<div class = "input"><input type="text"  value = "${value}"><button>Edit</button></div>`;
    
}
)





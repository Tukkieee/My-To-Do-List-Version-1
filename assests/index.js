"use strict"

let inputName = document.getElementById("input");
let outer = document.getElementById("outer");
let main = document.getElementById("main");
let userName = document.getElementById("user");
let add= document.getElementById("add");
let inputBox=document.getElementById("userInput");
let list=document.getElementById("listArea");
let btn=document.getElementById("nextBtn");


//create username property
btn.addEventListener('click',()=>{
    if(inputName.value == ""){
        alert("Please Enter your Name")
    }
    else{
        (outer.style.display = "block") && (userName.innerHTML =`${inputName.value}'s`);
        main.classList.toggle("disappear")
    }
})

//create items and buttons
add.addEventListener('click',()=>{
    if(inputBox.value.length == 0){
        alert("Please Enter a Task")
    }
  
    else{
        list.innerHTML += `
            <div class="list">
                <button class="complete">
                <i class="fa fa-check"></i>
                </button>
                <span id="listitem">
                    ${inputBox.value}
                </span>
                <div class="con">
                <button class="edit">
                    <i class="fa fa-edit"></i>
                </button>
                <button class="delete">
                    <i class="fas fa-trash-alt"></i>
                </button>
                </div>
            </div>
        `;
    }
    // inputBox.value="";
  
        let del = document.querySelectorAll(".delete");
        for(let i=0; i<del.length; i++){
            del[i].onclick = function(){
                this.parentNode.parentNode.remove();
        }
    }
    let check= document.querySelectorAll(".complete");
    for(var i=0; i<check.length; i++){
        check[i].onclick = function(){
            this.parentNode.style.textDecoration="line-through";
    }
}
    let edit = document.querySelectorAll(".edit");
    for(let i=0; i<edit.length; i++){
        edit[i].onclick = function(){
    inputBox.value = this.parentNode.previousElementSibling.innerHTML;
    this.parentNode.parentNode.remove();
    }
}
})


  
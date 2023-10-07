//form//

const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode
    if(this.value == ""){
        parent.classList.remove("focus");
    }
    
}

inputs.forEach((input)=>{
    input.addEventListener("focus", focusFunc)
    input.addEventListener("blur", blurFunc)
});

//for nav bar//
/*$(`menu-btn`).click(function(){
    $(`nav .navigation ul`).addClass(`active`)
});
$(`menu-close`).click(function(){
    $(`nav .navigation ul`).removeClass(`active`)
});*/

$("#menu-btn").click(function(){
    $("nav .navigation ul").addClass("active")
});
$("#menu-close").click(function(){
    $("nav .navigation ul").removeClass("active")
});

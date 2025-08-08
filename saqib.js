const body = document.querySelector("body")
const buttons = document.querySelectorAll('.button')

buttons.forEach((btn)=>{
    // console.log(btn);
    btn.addEventListener('click',(e)=>{
        // console.log(e);
        // console.log(e.target);
        if(e.target.id === "grey"){
            body.style.backgroundColor = "grey"; 
            // body.style.backgroundColor = e.target.id;  //hardcore coding does same take color from css 
        }
        if(e.target.id === "white"){
            body.style.backgroundColor = "white"; 
        }
        if(e.target.id === "red"){
            body.style.backgroundColor = e.target.id; 
        }
        if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id; 
        }
        
    })
})
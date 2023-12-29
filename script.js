let body=document.querySelector("body");
let btn=document.querySelectorAll("button");
// console.log(btn)
btn.forEach((button)=>{
       button.addEventListener("click",(e)=>{
         if(button.className==="red"){
            body.style.backgroundColor="Red";
         }
         else if(button.className==="orange"){
            body.style.backgroundColor="orange";
         }else if(button.className==="black"){
            body.style.backgroundColor="black";
         }else if(button.className==="purpule"){
            body.style.backgroundColor="purple";
         }else if(button.className==="green"){
            body.style.backgroundColor="green";
         }else if(button.className==="red"){
            body.style.backgroundColor="Red";
         }
       })
})
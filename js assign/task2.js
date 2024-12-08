let image=document.getElementById("image");
let circle=document.getElementById("circle");
// let h1=document.getElementById("h1")
image.addEventListener("click",()=>{
    image.style.transform="translateX(1106px)";
    image.style.transition="3s";
    setTimeout(()=>{
        circle.style.backgroundColor="red";
    },3000)



})
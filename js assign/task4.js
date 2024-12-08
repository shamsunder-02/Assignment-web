// let txt=document.getElementById("txt");
// txt.addEventListener('keyup',()=>{
//     let color = Math.floor(Math.random()*6269644).toString(16);
//     console.log(color);

//     document.body.style.backgroundColor=`#${color}`;
// })


let local=window.localStorage.setItem("name", "sham");
console.log(local);

local= window.localStorage.getItem("name");
console.log(local);


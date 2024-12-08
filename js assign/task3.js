let form=document.getElementById("form")
form.addEventListener("submit", (e)=>{
 e.preventDefault();
 let username=document.getElementById("username");
 let email=document.getElementById("email");
 let pass=document.getElementById("pass");
 
 let print1=document.getElementById("tag1");
 let print2=document.getElementById("tag2");
 let print3=document.getElementById("tag3");
 
 print1.innerHTML=`$(username)`;
 print2.innerHTML=`$(email)`;
 print2.innerHTML=`$(pass)`;

})
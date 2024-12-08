// // // var a;
// // // a=100;
// // // console.log(a);

// // // console.log(a);
// // // let a=1000;
// // // a=100;
// // // console.log(a);

// // const a=10;
// // a=30;

// // console.log(a);



// // GEC (Global Execution context)


// // console.log(a);
// // var a=200;
// // a=5000;
// // console.log(a);
// // var x=3000;
// // let c=300;
// // console.log(a);
// // console.log(c);
// // console.log(window .a);
// // console.log(window.b);
// // var x=1000;
// // const z=300;
// // console.log(z);

// //  TYPE CASTING    
// // console.log(2+2);
// // console.log(2+"2");
// // console.log(4+'4');
// // console.log(2-"1");
// // console.log(5*"3");
// //  var a=Number(prompt("enter the first value"));
// //  var b=Number(prompt("enter the second value"));
// //  console.log(a+b);
 
// //  var c=prompt("enter the first value");
// //  var d=prompt("enter the second value");
// // console.log(c*d);


// //  STRING METHODS

// // let str="photosynthesis";
// // console.log(str.charAt(13));
// // console.log(str.charCodeAt(4));
// // console.log(str.concat("hello"));
// // console.log(str.endsWith("z"));








// // FUNCTION EXECUTION CONTEXT






// // console.log("START");
// // rio()
// // function rio(){
// //     var a=1000;
// //     console.log(a);
// //     let b=2000;
// //     console.log(b);
    
// //     console.log(this.c); 
// // }
// // var c=2000;
// // var d=30000;
// // console.log(c);
// // console.log(d);
// // console.log(this.d);
// // console.log(window.c);
// // rio()


// //   NESTED FUNCTION.............//


// // console.log("START");
// // function first(){
// //     var a=1000;
// //     console.log(a);
// //     function second(){
// //         let c=10000;
// //         var a=20000;
// //         console.log(a);
// //         console.log(c);
    
// //     function third(){
// //             let c=20;
// //             const r=49;
// //             console.log(c);
// //             console.log(r);
            
// //     }
// //     return third
// // }
// // return second

    
// // }
// // first()()()

// //  higher order function

// // call back function

// // function pin(callback){
// //     callback()
// //     console.log("")
    
// // }


// // Generator function
// //  function* max(a){
// //     yield "enter your pin";
// //     yield "enter the pin second time"+a;
// //     yield "enter the pin third time";
// //     return "u have entered the pin too many times";

// //     yield " there is no more attempts to enter your pin";
// // }

// // let gen=max(10);
// // console.log(gen.next());
// // console.log(gen.next());
// // console.log(gen.next());
// // console.log(gen.next());
// // console.log(gen.next());


// //  Highest order function

// // function max(){
// //     let a=2*3+(2);
// //     console.log(a);
    

// // }
// // let ab=max();

// // ================================================ OBJECT =============================================
//     // let obj={
//     //     name:"sham",
//     //     age:22,
//     //     place:"ballari"
//     // }
//     // console.log(obj);
//     // console.log(obj.job="tyss");

//     //  ================================================= object destructuring ==========================================

//     // let obj={
//     //     name:" hello",
//     //     age:"20",
//     //     job:{
//     //         time:"20"
//     //     }
//     // }
//     // console.log(obj);
    
//     // let {name,age,job}=obj;
//     // console.log(job.time="300");
    
//     // =========================================== object methods ========================================================
// // console.log(Object.keys(obj)); // by using the key
// // console.log(Object.values(obj)); // by using the values
// // console.log(Object.entries(obj)); //  by using the entries

// // =========================================== Seal, freeze =================================================================
// // Object.seal(obj);
// // console.log( obj.age="30");     // we can update any vales if the object is sealed;
// // console.log(obj);



// // console.log(obj.max="dingaaaaaaaaaaaaa"); // we can't add any values if the object is sealed;
// // console.log(obj);


// // console.log(delete(obj.age));
// // console.log(obj);                                // we can't delete any type of values if the ibject is sealed;

// //  ====================================  time object =================================================
// // console.log("heloooooooooooooooooooooooooooooooooooooo");
// // console.log("heloooooooooooooooooooooooooooooooooooooo");
// // console.log("heloooooooooooooooooooooooooooooooooooooo");
// // console.log("heloooooooooooooooooooooooooooooooooooooo");
// // console.log("heloooooooooooooooooooooooooooooooooooooo");
// // console.log("heloooooooooooooooooooooooooooooooooooooo");
// // console.log("heloooooooooooooooooooooooooooooooooooooo");
// // console.log("heloooooooooooooooooooooooooooooooooooooo");
// // setTimeout(()=>{
// //     console.log("i am the last one");
    
// // }, 5000)
// // console.log("dingaaaaaaaa");
// // console.log("dingaaaaaaaa");
// // console.log("dingaaaaaaaa");
// // setInterval(()=>{
// //     console.log("i am always sleeping");
// // }, 3000);
// // console.log("dingaaaaaaaa");

// // ================================================= DOM menthods ===============================================================

// // let max=window.document.createElement("div")
// // console.log(max);

// // ================================================= Events =======================================================================
// let btn=document.getElementById("btn");
// console.log(btn);


// btn.addEventListener('click', ()=>{
//     document.body.style.backgroundColor="red","blue"
//     document.body.style.transitionDuration="5s"
//     btn.style.backgroundColor="yellow"
// })




//     closure   

function x(){
    var a= 7;
    function y(){
        console.log(a);
    }
    y();
}
x();
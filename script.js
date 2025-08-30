function outer(){
    let c=0;
    function inner(){
        c++;
        console.log(c);
    }
    return inner;
}
let x=outer();
x();
x();
x();
 x=null;
 console.log(x)
 let y=outer();
 y();
 y();
 y();
 console.log("Start");
setTimeout(() => {
  console.log("Timeout callback");
}, 2000);
console.log("End");


//event loop or currying



//settimeout or set time inteval
setTimeout(() =>{
    for(let i=1; i<=10;i++){
        console.log(2*i)
    }
},2000)
let i=1;
let intervalId =setInterval(() =>
{   
     console.log(2 * i);
     i++;
     if(i>10){
         clearInterval(intervalId)
     }
},2000)

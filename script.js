function outer() {
  let c = 0;
  function inner() {
    c++;
    console.log(c);
  }
  return inner;
}
let x = outer();
x();
x();
x();
x = null;
console.log(x);
let y = outer();
y();
y();
y();
console.log("Start");
setTimeout(() => {
  console.log("Timeout callback");
}, 2000);
console.log("End");

//event loop or currying
function add(a){
    return (b) => {
        return a+b;
    }

}
console.log(add(2)(3));



//settimeout or set time inteval
setTimeout(() => {
  for (let i = 1; i <= 10; i++) {
    console.log(2 * i);
  }
}, 2000);
let i = 1;
let intervalId = setInterval(() => {
  console.log(2 * i);
  i++;
  if (i > 10) {
    clearInterval(intervalId);
  }
}, 2000);

p = false;
//promise
let a = new Promise((hogya, nihua) => {
  if (p){ hogya("promise is resolved");}
  else{ nihua("promise is not ");}
});
a.then((data) => {
    console.log(data);
    })
    
.catch((data) => {
    console.log(data);
    })
    .finally(() => {
      console.log("finally");
    });


//promise ka example
{
let x= new Promise((resolve,reject) =>
{
    let age=Math.floor(Math.random()*100);
    if(age>18)
    {
        resolve("you are eligible to vote");
    }
    else
    {
        reject("you are not eligible");
    }
})
x.then((data)=>{
    console.log(data);
})
.catch((data)=>{
    console.log(data);
})
}




//promise pending
{
let age=20;
let x= new Promise((resolve,reject)=>{
    
    if(age>18)
    {
        setTimeout(()=>{
        resolve("you are eligible to vote");
        },2000);
    }
    else
    {
        setTimeout(()=>{
        reject("you are not eligible");
        },10000);
    }
});
console.log(x)
setTimeout(() => {
    console.log(x)
}, 3000);
x.then((data)=>{
    console.log(data)
})
.catch((data)=>
{
    console.log(data)
})
}

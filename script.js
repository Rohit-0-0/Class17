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
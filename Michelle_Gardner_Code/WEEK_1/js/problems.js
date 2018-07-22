//upon window loading, we can do this function
window.onload = function(e){

    //this.console.log('iuahfiuah');
    //alert('JS Works!!');
    document.getElementById("runFib").addEventListener("click", runFib, true);

}


/**
 * 1) Fibonacci
 * Define function: fib(n)
 * Return the nth number in teh fibonacci sequence
 * 0 1 1 2 3 5 8
 */

 function fib(n){
     if(n == 0)
         return 0;
     if(n == 1)
        return 1;
    return fib(n-1) + fib(n-2);
 }

function runFib(){
    let n = document.getElementById('fibN').value;

    // console.log(fib(n));
    document.getElementById('fibOut').innerHTML = '= ' + fib(n);
}
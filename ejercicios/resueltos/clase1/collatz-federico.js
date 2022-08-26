let num = 4545877;

function collatz(num){
    console.log(num);
    num % 2 == 0 ? collatz(num/2)  : collatz(num*3+1)
}

collatz(num)
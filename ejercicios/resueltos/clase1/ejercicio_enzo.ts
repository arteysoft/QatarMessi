let num = 4545877;

function numeros(num){
    console.log(num);
    num % 2 == 0 ? numeros(num/2)  : numeros(num*3+1)
}

numeros(num)
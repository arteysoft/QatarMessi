let limite = 100;
let inicio = 2;
let arrayPrimos = [1];

for (; inicio < limite; inicio++) 
{
  if (esPrimo(inicio)) 
  {
    arrayPrimos.push(inicio);
  }
  
}

document.write(arrayPrimos);

function esPrimo(numeroActual) 
{
  for (var i = 2; i < numeroActual; i++) 
  {
    if (numeroActual % i === 0) 
    {
      return false;
    }

  }
  
  return numeroActual !== 1;
  
}
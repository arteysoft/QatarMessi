function steps(number) {
    if (number > 0) {
        while (n !== 1) {
            if (n % 2 === 0) {                                      
                n = n / 2;    
            } else if (n % 2 !== 0) {
                n = (n * 3) + 1;   
            }
            return number;
        }
    } else {
        throw new Error('Only positive numbers are allowed');
    }
}

// Me gustaria hacer esta correccion
// La manera correcta de programar es esta

   if (number <== 0) {
      throw new Error('descripcion')
   }
   while () {
   }
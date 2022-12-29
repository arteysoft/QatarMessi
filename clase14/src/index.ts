console.log('Recap....')

let hacerTiempo = (segundos) => {
    return new Promise((resolve) => {
        setTimeout(resolve, segundos * 1000)
    })
}


let hacerTiempo2 = async () => {
    for (let x = 0; x < 5; x++) {
        console.log('   doing time ...')
        await hacerTiempo(1);
    }
}


let funcionPromiseDetallada = async () => {
    for (;;) {
        console.log('estoy dentro de un bucle sincronico')
        await hacerTiempo2()
    }
}


funcionPromiseDetallada()
export let verificarSession = (onFinish) => {
    // Lo que hay que hacer.
    // Sumar un endpoint que cumpla el objetivo de verificar que la session sigue viva
    // hacer fetch con get
}

export let login = (onFinish) => {
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify({nombreUsu: "max", password : "max33redBull"})
        })
        .then(function(response) {
            console.log('response =', response);
            return response.json();
        })
        .then(function(data) {
            console.log('data = ', data);
            onFinish(data)
        })
        .catch(function(err) {
            console.error(err);
        });
}
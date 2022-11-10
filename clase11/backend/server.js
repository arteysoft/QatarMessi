const express = require('express')
const http = require('http')

const app = express()
app.use(express.json())

const PORT = parseInt(process.argv[2])
const SERVER = process.argv[3]

app.get('/', (request, response) => {
    response.setHeader('Content-Type', 'application/json')

    let arr = []

    arr.push({server:SERVER})

    response
        .status(200)
        .end(JSON.stringify({arr}))
})

app.listen(PORT, (err) => {
    console.log(['escuchando el puerto', PORT].join(': '))
})

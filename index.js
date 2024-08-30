

const express = require('express')
const app = express()
const port = 3000
//         req =require /res = response
app.get('/exercicio1/', (req, res) => {
    // http://localhost:3000/exercicio1?num1=5&num2=10

    const num1 = req.query.num1
    const num2 = req.query.num2s
    res.json({message: "A soma é " + (Number(num1) + Number(num2))})
})

app.get('/exercicio2/', (req, res) => {
    //http://localhost:3000/exercicio2?valorHora=8&horasTrabalhadas=10

    const valorHora = req.query.valorHora
    const horasTrabalhadas = req.query.horasTrabalhadas
    const result2 = Number(valorHora) * Number(horasTrabalhadas)

    res.json({message: "Seu salário no fim do mês R$ " + result2 })
})

app.get('/exercicio3/', (req, res) => {
    //http://localhost:3000/exercicio3?pessoa1=1&pessoa2=1&pessoa3=1&pessoa4=1&pessoa5=1&

    const pessoa1 = req.query.pessoa1
    const pessoa2 = req.query.pessoa2
    const pessoa3 = req.query.pessoa3
    const pessoa4 = req.query.pessoa4
    const pessoa5 = req.query.pessoa5
    const result3 = ((Number(pessoa1) + Number(pessoa2) + Number(pessoa3) + Number(pessoa4) + Number(pessoa5)) / 5)

    res.json({messagem: "A média do peso das 5 pessoas é de " + result3 + " KG" })
})

app.get('/exercicio4/', (req,res) => {
    //http://localhost:3000/exercicio4?celsius=20

    const celsius = req.query.celsius
    const result4 = ((Number(celsius) * 9 + 160) /5)

    res.json({message: "A coversção de Celsius para Fahrenheit é de " + result4})
})





// listen = escutar
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`) //Outra forma ("Exemplo Merda" + port)
})
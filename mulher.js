const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
 response.json({
    nome: 'Aline Naomi',
    imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQHx1uhcDGkMHA/profile-displayphoto-scale_400_400/B4DZoG2o1SHsAg-/0/1761051579447?e=1776297600&v=beta&t=9p5B1t1bPc_wRses7gu7zVgPz3Y_t0vM8srr3WauTEo',
    minibio: 'Aspirante a algo'
})
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)
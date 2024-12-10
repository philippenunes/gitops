const express = require('express');
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.status(200).json({value: 'Hello ArgoCD!'})
})

app.listen(PORT, '0.0.0.0', () => {
    console.log('Servidor rodando na porta: ', PORT)
})
import express from 'express'

const app = express()
const PORT = 3001

app.use(express.json())

app.get('/',(req, res)=>{
    res.send('Servidor funcionando correctamente')
})

app.listen(PORT, ()=>{
    console.log(`servidor escuchando en http://localhost:${PORT}`)
})
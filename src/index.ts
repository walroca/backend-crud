import express from 'express'
import userRoutes from './routes/user.routes'

const app = express()
const PORT = 3001

app.use(express.json())

app.use('/api', userRoutes)

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
})

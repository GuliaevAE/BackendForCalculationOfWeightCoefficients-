const express = require('express');
const cors = require('cors');

const documentRouter = require('./routes/document.routes')
const userRouter = require('./routes/user.routes')
const clientsparts = require('./routes/clientsparts.routes')

const PORT = process.env.PORT || 8080
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', documentRouter)
app.use('/api', userRouter)
app.use('/api', clientsparts)

app.listen(PORT, ()=>console.log(`серв запущен! Port: ${PORT}`)) 
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 2001
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

io.on('connection', socket => {
    return null
})

app.io = io

app.get('/', (req,res) => {
    res.status(200).send('<p>Police Report API</p>')
})

const { 
    adminRouter,
    reportRouter
} = require('./router')

app.use('/admin', adminRouter)
app.use('/report', reportRouter)

// app.listen(port , ()=>{
//     console.log('api akitf bro')
// })

server.listen(port, () => {
    console.log('API police_report in ' + port)
})

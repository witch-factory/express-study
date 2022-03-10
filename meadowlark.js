import express from 'express'
import {engine} from 'express-handlebars'
import path from 'path'
const __dirname=path.resolve()
import handlers from "./lib/handlers.js"

const app=express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))
//public 디렉터리에 있는 건 조건없이 클라이언트로 전송된다
const port=process.env.PORT || 3000

app.get('/', handlers.home)

app.get('/about', handlers.about)

app.get('/headers', (req, res)=>{
  res.type('text/plain')
  const headers=Object.entries(req.headers)
    .map(([key, value])=>`${key}: ${value}`)
  res.send(headers.join('\n'))
})

//custom 404 page
app.use(handlers.notFound)

//custom 500 page
app.use(handlers.serverError)

app.listen(port, ()=>console.log(
  `Express started on http://localhost:${port}`
))
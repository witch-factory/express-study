import express from 'express'
import {engine} from 'express-handlebars';
import path from 'path'
const __dirname=path.resolve()

const fortunes=[
  "Conquer your fears or they will conquer you.",
  "River needs springs.",
  "Do not fear what you don't know.",
  "You'll have a pleasant surprise."
]

const app=express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))
//public 디렉터리에 있는 건 조건없이 클라이언트로 전송된다
const port=process.env.PORT || 3000

app.get('/', (req, res)=>{
  res.render('home')
})

app.get('/about', (req, res)=>{
  const randomFortune=fortunes[Math.floor(Math.random()*fortunes.length)]
  res.render('about', {fortune : randomFortune})
})

//custom 404 page
app.use((req, res)=>{
  res.status(404)
  res.render('404')
})

//custom 500 page
app.use((err, req, res, next)=>{
  res.status(500)
  res.render('500')
})

app.listen(port, ()=>console.log(
  `Express started on http://localhost:${port}`
))
const express = require('express')
const axios = require('axios')
const fs = require('fs')
const bodyParser = require('body-parser')
const cors = require('cors')
const sqlite3 = require('sqlite3').verbose()
const { response } = require('express')
const db = new sqlite3.Database('./data.db')

const urlClient = 'http://localhost:3000'


// db.serialize(()=> {
//   db.run(`INSERT INTO main (name, url, count)
//   VALUES('name', 'http://url.img', 2);`)
// })

// const selectData = (response) => {
//   db.all(`SELECT * FROM main`, (err, row)=> {
//       if(err){
//         err.message
//       }
//       response.send(row)
//     })
// }

// const addData = (id, name, url, count, productid) => {
//   db.serialize(()=>{
//     db.run(`INSERT INTO main (id, name, url, count, productid) 
//       VALUES(8, "name", "url", 1, 23`)
//     })
// }


const app = express()

// устанавливаем заголовки, связанные с CORS
app.use(cors({origin: true, credentials: true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const readJSON = fs.readFileSync('./data.json')
const jsonData = JSON.parse(readJSON)


// const addData = (body) => {
//   const id = jsonData.length
//   const {name, url, count, productid} = body
//   jsonData.push(
//     { id,
//       name,
//       url,
//       count,
//       productid
//     })
//   const json = JSON.stringify(jsonData)
//   fs.writeFile('data.json', json, (err) => {
//     if(err) throw err;
//     console.log(body)
//   })
// }

const addToShop = (id) => {
  const data = jsonData
  data.filter(shop=>shop.productid==id).map(el=>{
    el.count++
    console.log(el)
  })
  const json = JSON.stringify(data)
  fs.writeFile('data.json', json, err =>{
  if(err) throw err;})
}

const removeFromShop = (id) => {
  const data = jsonData
  data.filter(shop=>shop.productid==id).map(el=>{
    if(el.count>0) el.count--
    console.log(el)
  })
  const json = JSON.stringify(data)
  fs.writeFile('data.json', json, err =>{
  if(err) throw err;})
}


const buyAll = () => {
  jsonData.map(shop=> {
    shop.count = 0
  })
  const json = JSON.stringify(jsonData)
  fs.writeFile('data.json', json, err => {
    if(err) throw err
  })
}


app.get('/', (req,res)=> {
  res.json(jsonData)
})


app.post('/add/:id', (req,res)=> {
  res.header("Access-Control-Allow-Origin")
  addToShop(req.params.id)
})

app.post('/remove/:id', (req,res)=> {
  removeFromShop(req.params.id)
})


app.post('/buy', (req, res)=> {
  buyAll()
  res.redirect(urlClient)
})


app.listen(5000, ()=> {
    console.log("connected")
})

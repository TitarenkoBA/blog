const express = require('express')
const fs = require('fs')
const app = express()
app.use(express.json())
app.use('/', express.static('dist'))

app.get('/api/posts', (req, res) => {
  fs.readFile('server/db/posts.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }))
    } else {
      res.send(data)
    }
  })
})

app.get('/api/users', (req, res) => {
  fs.readFile('server/db/users.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }))
    } else {
      res.send(data)
    }
  })
})

const handler = require('./handler')

app.post('/api/posts', (req, res) => {
  handler(req, res, 'add', 'server/db/posts.json')
})

app.put('/api/posts/:id', (req, res) => {
  handler(req, res, 'change', 'server/db/posts.json')
})

app.delete('/api/posts/:id', (req, res) => {
  handler(req, res, 'remove', 'server/db/posts.json')
})

app.listen(3000, () => console.log('listening at port 3000...'))

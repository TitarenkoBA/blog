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

app.get('/api/loggedUser', (req, res) => {
  fs.readFile('server/db/loggedUser.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }))
    } else {
      res.send(JSON.stringify(data, null, 4))
    }
  })
})

app.put('/api/logInUser', (req, res) => {
  fs.readFile('server/db/users.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }))
    } else {
      const users = JSON.parse(data)
      const logInUser = users.find((item) => (item.login === req.body.email))
      if (String(logInUser.password) === String(req.body.password)) {
        const newLogInUser = {
          id: logInUser.id,
          login: logInUser.login,
          role: logInUser.role
        }
        fs.writeFile('server/db/loggedUser.json', JSON.stringify(newLogInUser, null, 4), (err) => {
          if (err) {
            res.sendStatus(404, JSON.stringify({ result: 0, text: err }))
          } else {
            res.send({ result: 1, text: 'Success' })
          }
        })
      }
    }
  })
})

app.put('/api/logOutUser', (req, res) => {
  fs.writeFile('server/db/loggedUser.json', JSON.stringify({}, null, 4), (err) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }))
    } else {
      res.send({ result: 1, text: 'Success' })
    }
  })
})

app.post('/api/signUp', (req, res) => {
  fs.readFile('server/db/users.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }))
    } else {
      const users = JSON.parse(data)
      users.unshift(req.body)
      fs.writeFile('server/db/users.json', JSON.stringify(users, null, 4), (err) => {
        if (err) {
          res.sendStatus(404, JSON.stringify({ result: 0, text: err }))
        } else {
          fs.writeFile('server/db/loggedUser.json', JSON.stringify(req.body, null, 4), (err) => {
            if (err) {
              res.sendStatus(404, JSON.stringify({ result: 0, text: err }))
            } else {
              res.send({ result: 1, text: 'Success' })
            }
          })
        }
      })
    }
  })
})

const handler = require('./handler')

app.post('/api/posts', (req, res) => {
  handler(req, res, 'add', 'server/db/posts.json')
})

app.put('/api/posts', (req, res) => {
  handler(req, res, 'change', 'server/db/posts.json')
})

app.delete('/api/posts', (req, res) => {
  handler(req, res, 'remove', 'server/db/posts.json')
})

app.put('/api/post', (req, res) => {
  handler(req, res, 'clap', 'server/db/posts.json')
})

app.listen(3000, () => console.log('listening at port 3000...'))

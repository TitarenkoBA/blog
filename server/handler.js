const posts = require('./posts')
const fs = require('fs')

const actions = {
  add: posts.add,
  change: posts.change,
  remove: posts.remove,
  clap: posts.clap
}

const handler = (req, res, action, file) => {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }))
    } else {
      const newPosts = actions[action](JSON.parse(data), req)
      fs.writeFile(file, newPosts, (err) => {
        if (err) {
          res.sendStatus(404, JSON.stringify({ result: 0, text: err }))
        } else {
          res.send({ result: 1, text: 'Success' })
        }
      })
    }
  })
}

module.exports = handler

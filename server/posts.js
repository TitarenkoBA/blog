const add = (posts, req) => {
  posts.unshift(req.body)
  return JSON.stringify(posts, null, 4)
}

const change = (posts, req) => {
  const find = posts.find((item) => item.id === +req.body.id)
  find.title = req.body.title
  find.description = req.body.description
  find.updateAt = req.body.updateAt
  find.userId = req.body.userId
  return JSON.stringify(posts, null, 4)
}

const remove = (posts, req) => {
  const find = posts.findIndex((item) => item.id === +req.body)
  posts.splice(find - 1, 1)
  return JSON.stringify(posts, null, 4)
}

const clap = (posts, req) => {
  const find = posts.find((item) => item.id === +req.body.id)
  find.claps++
  return JSON.stringify(posts, null, 4)
}

module.exports = {
  add, change, remove, clap
}

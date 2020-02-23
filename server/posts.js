const add = (posts, req) => {
  posts.push(req.body)
  return JSON.stringify(posts, null, 4)
}

const change = (posts, req) => {
  const find = posts.contents.find(el => el.id_product === +req.params.id)
  find.quantity += req.body.quantity
  return JSON.stringify(posts, null, 4)
}

const remove = (posts, req) => {
  const find = posts.contents.find(el => el.id_product === +req.params.id)
  posts.contents.splice(posts.contents.indexOf(find), 1)
  return JSON.stringify(posts, null, 4)
}

module.exports = {
  add, change, remove
}

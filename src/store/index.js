import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    buttonType: '',
    editingPost: '',
    loggedUser: {},
    users: [
      {
        id: 1,
        login: 'writer@mail.com',
        password: '123456',
        role: 'writer'
      },
      {
        id: 2,
        login: 'reader@mail.com',
        password: '123456',
        role: 'reader'
      }
    ],
    posts: []
  },
  mutations: {
    SignUp (state, user) {
      this.state.loggedUser = {}
      this.state.loggedUser.id = user.id
      this.state.loggedUser.login = user.login
      this.state.loggedUser.id = user.role
    },
    logOut (state) {
      this.state.loggedUser = {}
    },
    logIn (state, user) {
      this.state.loggedUser = {}
      this.state.loggedUser = user
    },
    createPost (state, post) {
      this.state.posts.unshift(post)
    },
    deletePost (state, postID) {
      this.state.posts.splice(this.state.posts.findIndex((item) => item.id === postID), 1)
    },
    editPost (state, post) {
      const editingPost = this.state.posts.find((item) => item.id === post.id)
      editingPost.title = post.title
      editingPost.description = post.description
      editingPost.updateAt = post.updateAt
      editingPost.userId = post.userId
    },
    clapPost (state, post) {
      this.state.posts.find((item) => item.id === post.id).claps++
    },
    rememberEditingPost (state, postID) {
      this.state.editingPost = postID
    },
    setButtonType (state, button) {
      this.state.buttonType = button
    },
    changePassword (state, newPassword) {
      this.state.loggedUser = newPassword
      this.state.users.find((item) => item.id === this.state.loggedUser.id).password = newPassword
    },
    loadPosts (state, data) {
      this.state.posts = data
    },
    getLoggedUser (state, data) {
      this.state.loggedUser = data
    }
  },
  actions: {
    SignUp (context, user) {
      Axios.post('/api/signUp', user)
        .then(context.commit('SignUp', user))
        .catch(error => {
          console.log(error)
        })
      context.commit('SignUp', user)
    },
    getLoggedUser (context) {
      Axios.get('/api/loggedUser')
        .then(response => context.commit('getLoggedUser', JSON.parse(response.data)))
        .catch(error => {
          console.log(error)
        })
    },
    logOut (context) {
      Axios.put('/api/logOutUser', {})
        .then(context.commit('logOut'))
        .catch(error => {
          console.log(error)
        })
    },
    logIn (context, user) {
      Axios.put('/api/logInUser', user)
        .then(context.commit('logIn', user))
        .catch(error => {
          console.log(error)
        })
    },
    createPost (context, post) {
      Axios.post('/api/posts', post)
        .then(context.commit('createPost', post))
        .catch(error => {
          console.log(error)
        })
    },
    deletePost (context, postID) {
      Axios.delete('/api/posts', postID)
        .then(context.commit('deletePost', postID))
        .catch(error => {
          console.log(error)
        })
    },
    editPost (context, post) {
      Axios.put('/api/posts', post)
        .then(context.commit('editPost', post))
        .catch(error => {
          console.log(error)
        })
    },
    clapPost (context, post) {
      Axios.put('/api/post', post)
        .then(context.commit('clapPost', post))
        .catch(error => {
          console.log(error)
        })
    },
    rememberEditingPost (context, postID) {
      context.commit('rememberEditingPost', postID)
    },
    setButtonType (context, button) {
      context.commit('setButtonType', button)
    },
    changePassword (context, newPassword) {
      context.commit('changePassword', newPassword)
    },
    loadPosts (context) {
      Axios.get('/api/posts')
        .then(response => context.commit('loadPosts', response.data))
        .catch(error => {
          console.log(error)
        })
    }
  }
})

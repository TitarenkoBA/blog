import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    buttonType: '',
    editingPost: '',
    loggedUser: {
      id: 1,
      login: 'writer@mail.com',
      password: '123456',
      role: 'writer'
    },
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
      this.state.users.push(user)
      this.state.loggedUser = { ...user }
    },
    logOut (state) {
      this.state.loggedUser = {}
    },
    logIn (state, user) {
      this.state.loggedUser = { ...user }
    },
    createPost (state, post) {
      this.state.posts.unshift(post)
    },
    deletePost (state, postID) {
      this.state.posts.splice(this.state.posts.findIndex((item) => item.id === postID), 1)
    },
    editPost (state, post) {
      const editingPost = this.state.posts.find((item) => item.id === this.state.editingPost)
      editingPost.title = post.title
      editingPost.description = post.description
      editingPost.updateAt = post.updateAt
      editingPost.userId = post.userId
    },
    clapPost (state, postID) {
      this.state.posts.find((item) => item.id === postID).claps++
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
    }
  },
  actions: {
    SignUp (context, user) {
      context.commit('SignUp', user)
    },
    logOut (context) {
      context.commit('logOut')
    },
    logIn (context, user) {
      context.commit('logIn', user)
    },
    createPost (context, post) {
      Axios.post('/api/posts', post)
        .then(context.commit('createPost', post))
        .catch(error => {
          console.log(error)
        })
    },
    deletePost (context, postID) {
      context.commit('deletePost', postID)
    },
    editPost (context, post) {
      context.commit('editPost', post)
    },
    clapPost (context, postID) {
      context.commit('clapPost', postID)
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

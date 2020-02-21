import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    buttonType: '',
    editingPost: {},
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
    posts: [
      {
        id: 1,
        title: 'Название поста',
        description: 'Текст',
        claps: 0,
        createdAt: '2019-09-29T00:00:00.000Z',
        updateAt: '2019-09-29T00:00:00.000Z',
        userId: 1
      },
      {
        id: 2,
        title: 'Название поста',
        description: 'Текст',
        claps: 0,
        createdAt: '2019-09-29T00:00:00.000Z',
        updateAt: '2019-09-29T00:00:00.000Z',
        userId: 1
      },
      {
        id: 3,
        title: 'Название постa',
        description: 'Текст',
        claps: 0,
        createdAt: '2019-09-29T00:00:00.000Z',
        updateAt: '2019-09-29T00:00:00.000Z',
        userId: 1
      },
      {
        id: 4,
        title: 'Название постa',
        description: 'Текст',
        claps: 0,
        createdAt: '2019-09-29T00:00:00.000Z',
        updateAt: '2019-09-29T00:00:00.000Z',
        userId: 1
      }
    ]
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
    deletePost (state, postIndex) {
      this.state.posts.splice(postIndex, 1)
    },
    editPost (state, post) {
      this.state.editingPost.title = post.title
      this.state.editingPost.description = post.description
      this.state.editingPost.updateAt = post.updateAt
      this.state.editingPost.userId = post.userId
    },
    clapPost (state, postIndex) {
      this.state.posts[postIndex].claps++
    },
    rememberEditingPost (state, post) {
      this.state.editingPost = post
    },
    setButtonType (state, button) {
      this.state.buttonType = button
    },
    changePassword (state, newPassword) {
      this.state.loggedUser = newPassword
      this.state.users.find((item) => item.id === this.state.loggedUser.id).password = newPassword
    },
    loadPosts (state, data) {
      alert(data)
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
      context.commit('createPost', post)
    },
    deletePost (context, postIndex) {
      context.commit('deletePost', postIndex)
    },
    editPost (context, post) {
      context.commit('editPost', post)
    },
    clapPost (context, postIndex) {
      context.commit('clapPost', postIndex)
    },
    rememberEditingPost (context, post) {
      context.commit('rememberEditingPost', post)
    },
    setButtonType (context, button) {
      context.commit('setButtonType', button)
    },
    changePassword (context, newPassword) {
      context.commit('changePassword', newPassword)
    },
    async loadPosts (context) {
      Axios.get('http://localhost:8080/api/posts').then((response) => alert(response.data))
      context.commit('loadPosts')
    }
  }
})

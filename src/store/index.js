import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const url = "https://jsonplaceholder.typicode.com/posts/"
const Headers = { Accecpt: "application/json" }

export default new Vuex.Store({
  state: {
    currentUser: [],
    allUsers: []
  },
  mutations: {
    setCurrentUser(state, payload) {
      if (state.currentUser.length > 0) {
        state.currentUser.pop();
      }
      state.currentUser.push(payload);
      state.allUsers.push(payload);
    }
  },
  actions: {
    async setCurrentUser(state, payload) {
      const user = await fetch(url + payload, { Headers });
      const data = await user.json();
      state.commit('setCurrentUser', data);
    }
  },
  getters: {
    getUser: state => state.currentUser,
    getAllUsers: state => state.allUsers
  }
})

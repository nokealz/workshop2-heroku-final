import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const url = "https://jsonplaceholder.typicode.com/posts/"
const headers = { Accecpt: "application/json" }

export default new Vuex.Store({
  state: {
    currentUser: [],
    allUsers: [],
    infoStd: [],
    AllinfoStd: [],
    // New
    currentUser2: [],
    allUsers2: [],
    infoStd2: [],
    AllinfoStd2: [],

  },
  mutations: {
    setStudentData(state, payload) {
      if (state.infoStd.length > 0) {
        state.infoStd.pop();
      }
      state.infoStd.push(payload)
      state.AllinfoStd.push(payload)
      console.log(state.infoStd)
      console.log(state.AllinfoStd)
    },
    setCurrentUser(state, payload) {
      if (state.currentUser.length > 0) {
        state.currentUser.pop();
      }
      state.currentUser.push(payload)
      state.studentUser.push(payload)
    },
    setCurrentStd(state) {
      if (state.currentUser.length > 0) {
        state.studentUser.pop();
      }
      state.studentUser.push(state.info)
      state.allStudentUsers.push(state.info)
    },


    // new

    setStudentData2(state, payload2) {
      if (state.infoStd2.length > 0) {
        state.infoStd2.pop();
      }
      state.infoStd2.push(payload2)
      state.AllinfoStd2.push(payload2)
      console.log(state.infoStd2)
      console.log(state.AllinfoStd2)
    },
    setCurrentUser2(state, payload2) {
      if (state.currentUser2.length > 0) {
        state.currentUser2.pop();
      }
      state.currentUser2.push(payload2)
      state.studentUser2.push(payload2)
    },
    setCurrentStd2(state) {
      if (state.currentUser2.length > 0) {
        state.studentUser2.pop();
      }
      state.studentUser2.push(state.info)
      state.allStudentUsers2.push(state.info)
    },
  },

  actions: {
    async setCurrentUser(state, payload) {
      const user = await fetch(url + payload, { headers });
      const data = await user.json();
      state.commit('setCurrentUser', data);

    },
    // new
    async setCurrentUser2(state, payload2) {
      const user2 = await fetch(url + payload2, { headers });
      const data = await user2.json();
      state.commit('setCurrentUser2', data);

    },

  },
  modules: {
  },
  getters: {
    getUser: state => state.infoStd,
    getAllUsers: state => state.AllinfoStd,
    // new
    getUser2: state => state.infoStd2,
    getAllUsers2: state => state.AllinfoStd2,
  },
})
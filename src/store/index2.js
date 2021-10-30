import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const url = "https://jsonplaceholder.typicode.com/posts/"
const headers = { Accecpt: "application/json" }

export default new Vuex.Store({
    state2: {
        currentUser2: [],
        addUsers2: [],
        infoStd2: [],
        AllinfoStd2: [],

    },
    mutations2: {
        setStudentData2(state2, payload2) {
            if (state2.infoStd2.length > 0) {
                state2.infoStd2.pop();
            }
            state2.infoStd2.push(payload2)
            state2.AllinfoStd2.push(payload2)
            console.log(state2.infoStd2)
            console.log(state2.AllinfoStd2)
        },
        setCurrentUser2(state2, payload2) {
            if (state2.currentUser2.length > 0) {
                state2.currentUser2.pop();
            }
            state2.currentUser2.push(payload2)
            state2.studentUser2.push(payload2)
        },
        setCurrentStd2(state2) {
            if (state2.currentUser2.length > 0) {
                state2.studentUser2.pop();
            }
            state2.studentUser2.push(state2.info)
            state2.allStudentUsers2.push(state2.info)
        },
    },
    actions2: {
        async setCurrentUser2(state2, payload2) {
            const user = await fetch(url + payload2, { headers });
            const data = await user.json();
            state2.commit('setCurrentUser2', data);

        },
    },
    modules2: {
    },
    getters2: {
        getUser2: state2 => state2.infoStd2,
        getAllUsers2: state2 => state2.AllinfoStd2,
    }
})

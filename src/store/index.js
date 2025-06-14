import {createStore} from "vuex";

const store=createStore({
    state: {
        count: 0,
        isCollapse:false,
        userList:[]
      },
      mutations: {
        increment(state) {
          state.count++
        },
        alterStatus(state){
            state.isCollapse=!state.isCollapse
        },
        storeUser(state,res){
            state.userList=res
        },
      },
      actions: {
        increment({ commit }) {
          commit('increment');
        },
        storeUser({commit},res){
            commit("storeUser",res)
        },
        storeMessage({commit},res){
            commit("storeMessage",res)
        }
      },
      getters: {
        doubleCount(state) {
          return state.count * 2;
        },
        getToken(){
            return localStorage.getItem('token')
        }
      }
})

export default store
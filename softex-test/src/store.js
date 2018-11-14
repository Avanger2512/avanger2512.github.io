import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const initialState = () => {
  return {
    name: '',
    phone: '',
    message: ''
  }
}

export default new Vuex.Store({
  state:  {
    name: 'Denis',
    phone: '',
    message: ''
  },
  getters: {
    getName(state) {
      return state.name;
    },
    getPhone(state) {
      return state.phone;
    },
    getMessage(state) {
      return state.message;
    }
  },
  mutations: {
    updateMessage(state, payload) {
      state.message = payload;
    },
    updateName(state, payload) {
      state.name = payload;
    },
    updatePhone(state, payload) {
      state.phone = payload;
    },
    resetFormData(state) {
      const s = initialState()
      Object.keys(s).forEach(key => {
        state[key] = s[key]
      });
    }
  },
  actions: {

  },
  strict: process.env.NODE_ENV !== 'production'
})

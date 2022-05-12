import { defineStore } from 'pinia'
import { db, addDoc, collection } from '../boot/firebase.js'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    userSignedIn: false,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++
    },
    async login(email, password) {
      const docRef = await addDoc(collection(db, 'users'), {
        password,
        email,
      })
      console.log('Document written with ID: ', docRef.id)
    },
    async register(email, password) {
      console.log(email, password);
    },
  },
})

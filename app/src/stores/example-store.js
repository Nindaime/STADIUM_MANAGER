import { defineStore } from 'pinia'
import axios from 'axios'
import { nanoid } from 'nanoid'
import { db, addDoc, collection } from '../boot/firebase.js'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    userSignedIn: false,
    newUserDetails: {
      email: null,
      password: null
    },
    vcode: null,
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

    register(email, password) {
      this.sendValidationEmail(email);
      this.newUserDetails.email = email
      this.newUserDetails.password = password
    },
    registerVerified() {
      console.log(this.newUserDetails);
    },
    sendValidationEmail(email) {
      console.log(email, 'me')
      let vCode = nanoid(6)
      this.vcode = vCode
      axios
        .post('http://localhost:3000/verify', { email, vCode })
        .then((res) => {
          console.log(res, 'succesful')
        })
        .catch((error) => {
          console.log(error)
        })
      
    },
  },
})

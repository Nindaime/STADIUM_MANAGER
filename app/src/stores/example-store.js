import { defineStore } from 'pinia'
import axios from 'axios'
import { nanoid } from 'nanoid'
import {
  db,
  doc,
  setDoc,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  auth,
} from '../boot/firebase.js'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    userSignedIn: false,
    isUserLoggedIn: false,
    newUserDetails: {
      email: null,
      password: null,
      firstname: null,
      lastname: null,
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
      let higherThis = this
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          this.isUserLoggedIn = true
          higherThis.$router.push('/dashboard')
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorCode, errorMessage)
        })
    },

    register(email, password, firstname, lastname) {
      this.sendValidationEmail(email)
      this.newUserDetails.email = email
      this.newUserDetails.password = password
      this.newUserDetails.firstname = firstname
      this.newUserDetails.lastname = lastname
    },
    async registerVerified() {
      let { email, password, firstname, lastname } = this.newUserDetails
      this.isUserLoggedIn = true

      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const uid = userCredential.user.uid
          setDoc(doc(db, 'users', uid), {
            email,
            password,
            firstname,
            lastname,
          }).catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            console.log(errorCode, errorMessage)
          })
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorCode, errorMessage)
        })
      this.$router.push({ path: '/dashboard' })
    },
    sendValidationEmail(email) {
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

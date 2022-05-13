<template>
  <div class="row justify-center q-mt-md">
    <div class="col-6">
      <q-card class="my-card q-mt-lg">
        <q-card-section>
          <div class="q-mb-md">
            <span class="text-h6">Register</span>
          </div>
          <q-input outlined v-model="firstname" label="First Name" class="q-mb-md" />
          <q-input outlined v-model="lastname" label="Last Name" class="q-mb-md" />
          <q-input outlined v-model="email" label="Email" class="q-mb-md" />
          <q-input
            v-model="password"
            outlined
            label="Password"
            class="q-mb-md"
            :type="isPwd ? 'password' : 'text'"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-input
            v-model="confirmPassword"
            outlined
            label="Confirm Password"
            class="q-mb-md"
            :type="isPwdConfirm ? 'password' : 'text'"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwdConfirm ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwdConfirm = !isPwdConfirm"
              />
            </template>
          </q-input>
          <q-btn
            color="primary"
            label="Register"
            class="q-mt-sm"
            :disable="isDisabled"
            @click="register"
          />
          <div class="text-center q-mt-sm">
            <span>
              Already havean account?
              <router-link to="/login">
                Login
              </router-link>
            </span>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useCounterStore } from '../stores/example-store'

const store = useCounterStore()
const $router = useRouter()

let text = ref('Hello World')
let email = ref('')
let firstname = ref('')
let lastname = ref('')
let password = ref('')
let confirmPassword = ref('')
let isPwd = ref(true)
let isPwdConfirm = ref(true)
let isDisabled = ref(true)
function register() {
  store.register(email.value, password.value, firstname.value, lastname.value);
  $router.push('/verify')
}
function flipDisabled() {
  isDisabled.value = false
}


watch(confirmPassword, (newValue, oldValue) => {
  if (newValue == password.value) {
    flipDisabled()
  }
})
</script>

<style scoped></style>

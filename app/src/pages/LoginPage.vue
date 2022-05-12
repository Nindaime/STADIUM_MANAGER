<template>
  <div class="row justify-center q-mt-md">
    <div class="col-6">
      <q-card class="my-card q-mt-lg">
        <q-card-section>
          <div class="q-mb-md">
            <span class="text-h6">Login</span>
          </div>
          <q-input outlined v-model="email" label="Email" class="q-mb-md" />
          <q-input
            v-model="password"
            outlined
            label="Password"
            :type="isPwd ? 'password' : 'text'"
            hint="Password with toggle"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-btn color="primary" label="Login" class="q-mt-sm" @click="login" />
          <div class="text-center q-mt-sm">
            <span>
              Don't have an account?
              <router-link to="/signup">
                Register
              </router-link>
            </span>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useCounterStore } from '../stores/example-store'
const store = useCounterStore()
let password = ref('')
let isPwd = ref(true)
let email = ref('')
function login() {
  store.login(email.value, password.value)
  console.log(password.value, email.value)
}
</script>

<template>
  <div class="row justify-center q-mt-md">
    <div class="col-6">
      <q-card class="my-card q-mt-lg">
        <q-card-section>
          <div class="q-mb-md">
            <span class="text-h6">Register</span>
          </div>
          <q-input outlined v-model="text" label="Email" class="q-mb-md" />
          <q-input outlined v-model="text" label="Password" class="q-mb-md" />
          <q-input outlined v-model="text" label="Confirm Password" />
          <q-btn color="primary" label="Register" class="q-mt-sm" />

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

let text = ref('Hello World')
let password = ref('')
let isPwd = ref(true)
let email = ref('')
function login() {
  store.login(email.value, password.value)
  console.log(password.value, email.value)
}
</script>

<style scoped></style>

<template>
  <div class="row justify-center q-mt-md">
    <div class="col-6">
      <q-card class="my-card q-mt-lg">
        <q-card-section>
          <div class="q-mb-md">
            <span class="text-h6">Login</span>
          </div>
          <q-input outlined v-model="text" label="Email" class="q-mb-md" />
          <q-input outlined v-model="text" label="Password" />
          <q-btn color="primary" label="Login" class="q-mt-sm" />
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
let text = ref('Hello World')
</script>

<style scoped></style>

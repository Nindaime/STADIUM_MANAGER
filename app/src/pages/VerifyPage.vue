<script setup>
import { ref } from 'vue'
let text = ref('Lorem')
let model = ref('English')
let options = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']
let checked = true
</script>

<template>
  <div class="q-gutter-y-sm">
    <div class="col-12 text-center q-mt-xl q-mb-md">
      <div class="text-h4 col text-h5">Verify Email</div>
    </div>
    <div class="row text-center q-mt-md q-mb-lg justify-center">
      <div class="text-body1 col-5">
        a verification code has been sent to your email "email@example.com".
        Please input it below to continue the registration process.
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-md-5 col-sm-10 col-xs-md">
        <div class="col">
          <q-input
            v-model="text"
            outline
            label="Enter Verification Code"
            class="q-mb-lg"
          />
        </div>
      </div>
    </div>

    <div class="row justify-center">
      <div class="col-5">
        <div class="items-center q-mb-md">
          <span>
            Didn't see it?
            <router-link to="/" class="text-primary">Resend</router-link>
          </span>
        </div>
        <div class="flex items-center">
          <span>
            Wrong Email
            <router-link to="/login" class="text-primary">Change</router-link>
          </span>
        </div>
      </div>
    </div>
    <div class="row justify-center items-center q-mt-md">
      <div class="col-5 row justify-between">
        <q-btn
          color="primary"
          label="Submit"
          class="q-py-sm"
          no-caps
          style="width: 100%;"
        />
      </div>
    </div>
  </div>
</template>

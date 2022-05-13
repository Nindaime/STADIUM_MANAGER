<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import { useCounterStore } from '../stores/example-store'
const $router = useRouter()
const $q = useQuasar()
let emailCode = ref('')
const store = useCounterStore()
let vcode = store.vcode
function proceed() {
  if (emailCode.value == vcode) {
    store.registerVerified()
  } else {
    triggerNegative()
    setTimeout(() => {
      $router.push('/login')
    }, 16000)
  }
}
function triggerNegative() {
  $q.notify({
    type: 'negative',
    message: 'Verification Code Invalid',
  })
}
</script>

<template>
  <div class="q-gutter-y-sm">
    <div class="col-12 text-center q-mt-xl q-mb-md">
      <div class="text-h4 col text-h5">Verify Email {{ vcode }}</div>
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
            v-model="emailCode"
            outlined
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
            <router-link to="/signup" class="text-primary">Change</router-link>
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
          @click="proceed()"
          style="width: 100%;"
        />
      </div>
    </div>
  </div>
</template>

<template>
  <div class="q-px-sm q-mt-lg">
    <div class="text-center text-h4">Add Stadiums</div>
    <div class="q-pa-md q-mx-auto" style="max-width: 400px;">
      <q-input
        filled
        v-model="name"
        outlined
        label="Name of Stadiums"
        hint="Name and surname"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        filled
        v-model="name"
        outlined
        label="Location"
        hint="Name and surname"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        filled
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type your age',
          (val) => (val > 0 && val < 100) || 'Please type a real age',
        ]"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>

      <div class="row justify-center">
        <div class="col-6">
          <q-input
            v-model="text"
            label="Search Stadiums"
            outlined
            class="q-mt-md"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-magnify" />
            </template>
          </q-input>
        </div>
        <div class="col-6">
          <q-input
            v-model="text"
            label="Search Stadiums"
            outlined
            class="q-mt-md"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-magnify" />
            </template>
          </q-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  setup() {
    const name = ref(null)
    const $q = useQuasar()
    const age = ref(null)

    const accept = ref(false)

    return {
      name,
      age,
      accept,
      lorem:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first',
          })
        } else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted',
          })
        }
      },

      onReset() {
        name.value = null
        age.value = null
        accept.value = false
      },
    }
  },
}
</script>

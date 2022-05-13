<template>
  <div class="q-px-sm q-mt-lg">
    <div class="text-center text-h4">Add Stadiums</div>
    <div class="q-pa-md q-mx-auto" style="max-width: 400px;">
      <q-input
        v-model="name"
        outlined
        class="q-my-sm"
        label="Name of Stadiums"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        outlined
        v-model="name"
        class="q-my-md"
        label="Location"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input outlined v-model="date" class="q-my-sm">
        <template v-slot:prepend>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="date" mask="YYYY-MM-DD HH:mm">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>

        <template v-slot:append>
          <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h>
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-time>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

      <q-uploader
        url="http://localhost:4444/upload"
        style="max-width: 350px;"
        label="Event Thumbnail"
      />
      <q-input
        outlined
        v-model="name"
        class="q-my-md"
        label="Team A"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        outlined
        v-model="name"
        class="q-my-md"
        label="Team B"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        outlined
        type="number"
        v-model="age"
        label="Number of Seats"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type your age',
          (val) => (val > 0 && val < 100) || 'Please type a real age',
        ]"
      />
      <q-input
        outlined
        type="number"
        v-model="age"
        label="Amount per Seat"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type your age',
          (val) => (val > 0 && val < 100) || 'Please type a real age',
        ]"
      />
      <q-input
        outlined
        type="number"
        v-model="age"
        label="Number of Seat Remaining"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type your age',
          (val) => (val > 0 && val < 100) || 'Please type a real age',
        ]"
      />
      <q-select v-model="model" outlined :options="options" label="Standard" />

      <div class="row justify-center q-mt-md">
        <q-btn label="Upload" type="submit" color="primary" />
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
      model: ref(null),
      options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
      age,
      accept,
      date: ref('2019-02-01 12:44'),
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

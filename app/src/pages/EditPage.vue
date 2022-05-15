<script setup>
import { useQuasar } from 'quasar'
import { ref, reactive } from 'vue'
import { useCounterStore } from '../stores/example-store'

const store = useCounterStore()

const name = ref(null)
const location = ref(null)
const date = ref('2019-02-01 12:44')
const teamA = ref(null)
const teamB = ref(null)
const numberOfSeats = ref(null)
const price = ref(null)
const seatsRemaining = ref(null)
const fileBlob = ref('')
const $q = useQuasar()
const model = ref(null)
const options = ref(['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'])

let props = reactive({
  name,
  location,
  date,
  fileBlob,
  teamA,
  teamB,
  numberOfSeats,
  price,
  seatsRemaining,
})
function onSubmit() {
  console.log(fileBlob.value)
  // store.uploadEvent(props)
}
function addedThumbnail(evt) {
  console.log(evt)
  console.log(fileBlob.value)
}
function onReset() {
  name.value = null
}
function previewImage(event) {
  // let blob = URL.createObjectURL(event.target.files[0])
  console.log(event)
}
</script>
<template>
  <div class="q-px-sm q-mt-lg">
    <div class="text-center text-h4">Add Events</div>

    <div class="q-pa-md q-mx-auto" style="max-width: 400px;">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          outlined
          v-model="name"
          class="q-my-md"
          label="Name"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-input
          outlined
          v-model="location"
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
        <!-- <q-uploader
          url="http://localhost:4444/upload"
          style="max-width: 300px;"
          @added="addedThumbnail(files)"
        /> -->
        <q-file
          filled
          bottom-slots
          v-model="fileBlob"
          @input="previewImage(file)"
          label="Thumbnail"
        ></q-file>

              <input hidden class="file-input" ref="fileInput" type="file" @input="onSelectFile" />
        <q-input
          outlined
          v-model="teamA"
          class="q-my-md"
          label="Team A"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-input
          outlined
          v-model="teamB"
          class="q-my-md"
          label="Team B"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-input
          outlined
          type="number"
          v-model="numberOfSeats"
          label="Number of Seats"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type something',
            // (val) => (val > 0 && val < 100) || 'Please type a real age',
          ]"
        />
        <q-input
          outlined
          type="number"
          v-model="price"
          label="Amount per Seat"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type something',
            // (val) => (val > 0 && val < 100) || 'Please type a real age',
          ]"
        />
        <q-input
          outlined
          type="number"
          v-model="seatsRemaining"
          label="Number of Seat Remaining"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type something',
            // (val) => (val > 0 && val < 100) || 'Please type a real age',
          ]"
        />
        <q-select
          v-model="model"
          outlined
          :options="options"
          label="Stadium Name"
        />
        <div class="row justify-center q-mt-md">
          <q-btn label="Upload" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
  </div>
</template>

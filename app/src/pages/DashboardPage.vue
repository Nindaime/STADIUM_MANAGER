<template>
  <div class="q-px-sm">
    <div class="row justify-center q-mb-md">
      <div class="col-6">
        <q-input v-model="text" label="Search Stadiums" class="q-mt-md">
          <template v-slot:prepend>
            <q-icon name="mdi-magnify" />
          </template>
        </q-input>
      </div>
    </div>
    <div class="row q-gutter-x-xs q-gutter-y-lg q-mt-sm">
      <q-card class="col" v-for="n in 4" :key="n">
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    return {
      lorem:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  },
}
</script>

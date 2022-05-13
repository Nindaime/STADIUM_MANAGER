<template>
  <div class="q-px-sm q-mt-lg">
    <div class="row justify-center q-mb-md">
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
    <div class="row q-gutter-lg q-px-md q-mt-lg" v-for="v in 12" :key="v">
      <q-card class="col" v-for="n in 4" :key="n">
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />
        <q-card-section>
          <div class="text-subtitle1">Northeastern University Dorms</div>
          <div class="text-subtitle2 row justify-between">
            <span>
              Boston, MA
            </span>
            <span>
              302 review
            </span>
          </div>
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

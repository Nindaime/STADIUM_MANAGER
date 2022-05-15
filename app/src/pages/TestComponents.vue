<template>
   <q-card style="width:500px">
          <q-card-section class="text-subitle2">
            <div :style="{ 'background-image': `url(${imageData})` }" @click="choosepicture">
              <span
                v-if="!imageData"
                class="placeholder"
                style="cursor: pointer"
              >Choose a picture</span>
              <input hidden class="file-input" ref="fileInput" type="file" @input="onSelectFile" />
            </div>
            <q-img :src="imageData" style="cursor: pointer" @click="choosepicture" />
          </q-card-section>
      <pre>{{imageData}}</pre>
      </q-card>
</template>
<script>
export default {
  data() {
    return {
      imageData: null,
    }
  },
  methods: {
    onSelectFile() {
      const input = this.$refs.fileInput;
      const files = input.files;
      this.FileImage = files[0];
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = e => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      }
    },
    choosepicture() {
      this.$refs.fileInput.click();
    },
  },
}
</script>
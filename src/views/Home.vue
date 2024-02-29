<script setup lang="ts">
import axios from 'axios'
import { reactive } from 'vue';

interface AnimalDataResponse {
  album_file: string,
  animal_age: string,
  animal_colour: string,
  animal_kind: string,
  animal_place: string,
  shelter_address: string,
  shelter_tel: string
  cDate: string,
}

const data = reactive({
  items: []
})

axios.get('/api?UnitId=QcbUEzN6E6DL&$top=1').then(resp => {
  data.items = resp.data.map((d: AnimalDataResponse) => {
    return {
      albumFile: d.album_file
    }
  })
})
</script>
<template>
  <div class="hero h-dvh"
    style="background-image: url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
        <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
          In deleniti eaque aut repudiandae et a id nisi.</p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
</template>
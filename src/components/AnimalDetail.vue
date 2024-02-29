<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  }
})

const visible = ref(props.visible)

</script>
<template>
  <dialog id="my_modal_1" class="modal">
    <div class="modal-box">
      <div class="absolute inset-0  card lg:card-side bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
        <div class="card-body">
          <h2 class="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary" @click="visible = false">關閉</button>
          </div>
        </div>
      </div>
    </div>
  </dialog>
</template>
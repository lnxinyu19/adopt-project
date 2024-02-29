<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from './components/Footer.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>
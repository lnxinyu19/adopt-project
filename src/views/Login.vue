<script setup lang="ts">

</script>
<template>
  <div class="flex justify-center items-center">
    <div class="border p-4 rounded-lg shadow-lg w-1/5">
      <form class="">
        <h3 class="text-2xl text-center font-bold">LOGIN</h3>
        <label for="account" class="label">帳號</label>
        <input id="account" type="email" placeholder="email" class="input input-bordered w-full" />
        <label for="password" class="label">密碼</label>
        <input id="password" type="password" placeholder="密碼" class="input input-bordered w-full" />
        <button class="w-full mt-5 rounded-xl btn btn-outline btn-secondary">登入</button>
      </form>
      <hr class="my-5">
      <div class="flex justify-around items-center">
        <a href="" class="text-info text-sm">忘記密碼？</a>
        <button class="btn btn-ghost">註冊</button>
      </div>
    </div>
  </div>
</template>
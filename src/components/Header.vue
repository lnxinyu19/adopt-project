<template>
  <div class="sticky z-10 top-0 navbar border-b px-4 bg-base-100">
    <div class="navbar-start">
      <h1 class="text-2xl font-extrabold">
        <RouterLink to="/">
          Pet Family
        </RouterLink>
      </h1>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal">
        <li>
          <RouterLink to="/adopt">我要領養</RouterLink>
        </li>
        <li>
          <RouterLink to="/login">動物醫院清單</RouterLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <RouterLink tag="button" class="btn btn-ghost" to="/login">登入</RouterLink>
    </div>
  </div>
</template>
<style></style>
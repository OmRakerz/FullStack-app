<template>
  <!-- шаблон для отображения контента -->
  <div id="app" class="container is-max-desktop">
    <router-view />
    <!-- это то, что отображает нужный компонент при активации навигационных ссылок. -->
  </div>
</template>

<style>
/* import style bulma */
@import "~bulma/css/bulma.css";
</style>

<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link>-->
<!--      <router-link to="/about">About</router-link>-->
<!--      <router-link to="/portfolio">Portfolio</router-link>-->
<!--      <router-link to="/contact">Contact</router-link>-->
<!--    </div>-->
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&family=Italiana&display=swap');

#app {
  font-family: 'Italiana', Helvetica, Arial, sans-serif;
}

html, body, div {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none; /* no underline */
}
</style>

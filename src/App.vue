<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export default {
  components: { Footer, Navbar }
}

</script>

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

p {
  line-height: 1.5rem;
}

a {
  text-decoration: none; /* no underline */
}

ul {
  list-style: none;
}
li {
  margin-bottom: .5rem;
}
</style>

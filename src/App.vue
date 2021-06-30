<template>
  <div id="app">
    <Header />
    <router-view class="container" />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  color: #37474f;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0 auto;
  padding: 0;
  background-image: url('https://i0.wp.com/hipertextual.com/wp-content/uploads/2013/11/Wallpaper-Monta%C3%B1as.jpg?fit=1200%2C800&ssl=1');
  min-height: 100vh;
  background-attachment:fixed ;
  background-size: cover;
}
</style>

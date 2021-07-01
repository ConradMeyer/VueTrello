<template>
  <header>
    <div>
      <img src="../assets/logo.png" alt="logo-vue" />
      <h1 class="title">Trello</h1>
    </div>
    <div class="right">
      <h3 @click="toggleFlag()">Colors</h3>
      <router-link class="btn-header" to="/">Mis paneles</router-link>
    </div>
  </header>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Header",
  methods: {
    ...mapActions(['toggleFlag'])
  }
};
</script>

<style lang="scss" scoped>
header {
  background-color: rgba(0, 0, 0, 0.6);
  // background-color: #607d8b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  div {
    display: flex;
  }
  img {
    width: 40px;
  }
  .title {
    align-self: center;
    color: #eceff1;
    font-size: 2rem;
    font-weight: bold;
    margin-right: 1rem;
  }
  div.right {
    display: flex;
    align-items: center;
    h3 {
      font-weight: normal;
      font-size: 16px;
      background-color: #327a9e;
      border: none;
      border-radius: 5px;
      box-shadow: 3px 3px 10px -5px black;
      color: whitesmoke;
      cursor: pointer;
      padding: 0.8rem;
      margin-right: 20px;
      width: 100px;
    }
  }
  .btn-header {
    background-color: #455a64;
    border: none;
    border-radius: 5px;
    box-shadow: 3px 3px 10px -5px black;
    color: whitesmoke;
    cursor: pointer;
    text-decoration: none;
    padding: 0.8rem;
  }
}
</style>
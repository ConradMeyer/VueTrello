<template>
  <header>
    <div>
      <img src="../assets/logo.png" alt="logo-vue" />
      <h1 class="title">Trello</h1>
    </div>
    <router-link class="btn-header" to="/">Mis paneles</router-link>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
header {
  background-color: rgba(0, 0, 0, 0.6);
  // background-color: #607d8b;
  display: flex;
  justify-content: space-between;
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
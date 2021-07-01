<template>
  <footer class="footer">
    <span
      >💻 Coding with 💖 Vuejs in Madrid | by
      <a class="name" href="https://github.com/ConradMeyer" target="_blank"
        >Conrad Meyer-Alten
      </a>
      2021
      |</span
    >
    <a
      href="https://www.linkedin.com/in/conrad-meyer-alten-rodr%C3%ADguez/"
      target="_blank"
    >
      <img src="../assets/linkedin.svg" alt="linkedin"
    /></a>
    |
    <a href="https://github.com/ConradMeyer" target="_blank">
      <img src="../assets/github.svg" alt="github" />
    </a>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
footer.footer {
  background-color: rgba(207, 216, 220, 0.8);
  bottom: 0;
  padding: 1rem;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  a.name {
    text-decoration: none;
    color: black;
    font-weight: bold;
    transition: all 600ms ease-in-out;
    &:hover {
      color: brown;
    }
  }

  a {
    text-decoration: none;
    color: none;
  }

  img {
    width: 25px;
    margin: 5px;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style> 

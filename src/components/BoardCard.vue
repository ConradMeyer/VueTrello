<template>
  <div class="board">
    <router-link
      class="board-card"
      :to="{ name: 'board', params: { name, id } }"
    >
      <span class="board-card-title">▶ {{ name }}</span>
    </router-link>
    <img src="../assets/delete.svg" alt="delete" @click="deleteBoard" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "BoardCard",
  props: {
    id: Number,
    name: String,
  },
  methods: {
    ...mapActions(["getBoards"]),
    async deleteBoard() {
      if (window.confirm("Do you really want to delete this board?"))
        try {
          const OPTS = {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          };
          const res = await fetch(
            `http://localhost:3000/boards/${this.id}`,
            OPTS
          );
          const data = await res.json();
          this.getBoards();
        } catch (err) {
          console.log(err);
        }
    },
  },
};
</script>

<style lang="scss" scoped>
.board {
  background-color: rgba(84, 110, 122, 0.95);
  box-shadow: 3px 3px 10px -5px black;
  border-radius: 5px;
  margin: 0.5rem 1.5rem;
  padding: 1rem;
  text-align: left;
  transition: all 600ms ease;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  img {
    width: 20px;
  }
  img:hover {
    cursor: pointer;
    font-weight: bold;
    transform: scale(1.2);
  }
  .board-card {
    text-decoration: none;
    color: #fafafa;
  }
  .board-card-title {
    font-size: 1.2rem;
  }
  .board-card:hover {
    font-weight: bold;
  }
}
.board:hover {
  background-color: #90a4ae;
}

/* @media screen and (min-width: 600px) {
      width: 33%;
    }
    @media screen and (min-width: 1024px) {
      width: 250px;
    } */
</style>
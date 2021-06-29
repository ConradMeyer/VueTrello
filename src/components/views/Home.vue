<template>
  <div class="home">
    <h1>Mis paneles</h1>
    <input
      type="text"
      placeholder="👉 Añade un nuevo proyecto..."
      v-model="boardName"
      @keyup.enter="addBoard()"
    />
    <div class="board-collection">
      <BoardCard
        class="boards"
        v-for="(board, index) in boards"
        :key="index"
        :name="board.name"
        :id="board.id"
      />
    </div>
  </div>
</template>

<script>
import BoardCard from "@/components/BoardCard";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    BoardCard,
  },
  data() {
    return {
      boardName: "",
    };
  },
  computed: {
    ...mapState(["boards"]),
  },
  methods: {
    ...mapActions(["getBoards", "addBoard"]),
    async addBoard() {
      const board = {
        name: this.boardName,
        boardList: [],
      };
      try {
        const OPTS = {
          method: "POST",
          body: JSON.stringify(board),
          headers: {
            "Content-Type": "application/json",
          },
        };
        const res = await fetch("http://localhost:3000/boards", OPTS);
        const data = await res.json();
        console.log(data);
        this.getBoards();
        this.boardName = "";
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.getBoards();
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin: 1.5rem;
}

.board-collection {
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 10px auto;
  margin-bottom: 100px;
}
.boards {
  width: 40%;
  min-width: 300px;
}
input {
  width: 50%;
  box-sizing: border-box;
  background-color: #546e7ac7;
  border: 2px solid #546e7a;
  border-radius: 3px;
  font-size: 1.1rem;
  outline: 0;
  padding: 0.5rem;
  transition: all 600ms ease;
}
input:focus,
input:active {
  background-color: white;
  color: #546e7a;
}
input::placeholder {
  color: white;
}
</style>
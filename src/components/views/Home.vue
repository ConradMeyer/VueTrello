<template>
  <div class="home">
    <h1>MIS PANELES</h1>
    <input
      type="text"
      placeholder="👉 Añade un nuevo panel..."
      v-model="boardName"
      @keyup.enter="addBoard()"
    />
    <h3 v-if="boards < 1" class="no-results">
      Oops...🤷‍♂️ No hemos encontrado ningún panel.
    </h3>
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

<style lang="scss" scoped>
h1 {
  text-align: center;
  margin: 1.5rem;
  color: whitesmoke;
}

.no-results {
  margin-top: 50px;
}

input {
  width: 50%;
  box-sizing: border-box;
  background-color: #546e7ac7;
  border: 2px solid #546e7a;
  border-radius: 3px;
  margin-bottom: 20px;
  font-size: 1.1rem;
  outline: 0;
  padding: 0.5rem;
  transition: all 600ms ease;

  &:focus,
  &:active {
    background-color: white;
    color: #546e7a;
  }
  &::placeholder {
    color: white;
  }
}

.board-collection {
  text-align: center;
  display: flex;
  // flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0px auto;
  padding-bottom: 100px;

  .boards {
    width: 40%;
    min-width: 300px;
  }
}
</style>
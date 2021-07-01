<template>
  <div class="home">
    <h1>MIS PANELES 🚀</h1>
    <input
      role="input"
      type="text"
      placeholder="👉 Añade un nuevo panel..."
      v-model="boardName"
      @keyup.enter="addBoard()"
    />
    <h3 v-if="!boards" class="no-results">
      Oops...🤷‍♂️ No hemos encontrado ningún panel.
    </h3>
    <div v-if="boards < 1" class="spinner" role="spinner">
      <img src="../../assets/spinner2.gif" alt="spinner" />
    </div>
    <div class="board-collection">
      <BoardCard
        class="boards"
        :class="color"
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
    ...mapState(["boards", "color"]),
  },
  methods: {
    ...mapActions(["getBoards", "addBoard", "get"]),
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
    this.get();
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: start;
  margin: 1.5rem;
  color: whitesmoke;
}

.no-results {
  margin-top: 50px;
  color: white;
  font-size: 1.5rem;
}

div.spinner img {
  margin-top: 50px;
  width: 100px;
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
div.red {
  background-color: rgba(197, 72, 72, 0.95);
}
div.black {
  background-color: rgba(170, 182, 64, 0.95);
}
div.blue {
  background-color: rgba(77, 189, 92, 0.95);
}
div.yellow {
  background-color: rgba(70, 165, 160, 0.95);
}
div.coral {
  background-color: rgba(119, 107, 189, 0.95);
}
div.brown {
  background-color: rgba(165, 78, 146, 0.95);
}
div.default {
  background-color: rgba(84, 110, 122, 0.95);
}
</style>
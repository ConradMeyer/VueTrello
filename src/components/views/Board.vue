<template>
  <section class="board">
    <h3><span>Mis paneles</span> ▸ {{ list.name }}</h3>
    <input
      type="text"
      placeholder="Añade una lista"
      v-model="listName"
      @keyup.enter="addBoardList()"
    />
    <div v-if="!list.boardList" class="spinner">
      <img src="../../assets/spinner2.gif" alt="" />
    </div>
    <h3 v-if="list.boardList < 1" class="no-results">
      👆 Aun no tienes ninguna lista creada.
    </h3>
    <div class="container">
      <Column
        class="list"
        v-for="(list, index) in list.boardList"
        :key="index"
        :name="list.name"
        :tasks="list.taskList"
        @deleteBoardList="deleteBoardList"
        @addNewTask="addNewTask"
        @deleteNewTask="deleteNewTask"
        @editNewTask="editNewTask"
      />
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Column from "../Column.vue";

export default {
  name: "board",
  components: {
    Column,
  },
  props: {
    id: Number,
  },
  data() {
    return {
      listName: "",
    };
  },
  computed: {
    ...mapState(["list"]),
  },
  methods: {
    ...mapActions(["getList", "postNewBoard", "deleteBoard"]),
    async addBoardList() {
      await this.deleteBoard(this.id);
      const board = {
        id: this.list.id,
        name: this.list.name,
        boardList: this.list.boardList,
      };
      const list = {
        name: this.listName,
        taskList: [],
      };
      board.boardList.push(list);
      await this.postNewBoard(board);
      this.listName = "";
    },
    async deleteBoardList(name) {
      if (window.confirm("Do you really want to delete this list?")) {
        await this.deleteBoard(this.id);
        const arr = this.list.boardList.filter((el) => el.name !== name);
        const board = {
          id: this.list.id,
          name: this.list.name,
          boardList: arr,
        };
        await this.postNewBoard(board);
        await this.getList(this.id);
      }
    },
    async addNewTask(task) {
      await this.deleteBoard(this.id);
      const board = {
        id: this.list.id,
        name: this.list.name,
        boardList: this.list.boardList,
      };
      board.boardList
        .find((el) => el.name === task.name)
        .taskList.push(task.task);
      await this.postNewBoard(board);
    },
    async deleteNewTask(obj) {
      if (window.confirm("Do you really want to delete this task?")) {
        await this.deleteBoard(this.id);
        const board = {
          id: this.list.id,
          name: this.list.name,
          boardList: this.list.boardList,
        };
        const arr = board.boardList
          .find((el) => el.name === obj.name)
          .taskList.filter((task) => task.task !== obj.task);

        board.boardList.find((el) => el.name === obj.name).taskList = arr;
        await this.postNewBoard(board);
      }
    },
    async editNewTask(obj) {
      await this.deleteBoard(this.id);
      const board = {
        id: this.list.id,
        name: this.list.name,
        boardList: this.list.boardList,
      };
      const arr = board.boardList
        .find((el) => el.name === obj.name)
        .taskList.filter((task) => task.task !== obj.task.task);

      board.boardList.find((el) => el.name === obj.name).taskList = arr;

      board.boardList
        .find((el) => el.name === obj.name)
        .taskList.push(obj.task);

      await this.postNewBoard(board);
    },
  },
  created() {
    this.getList(this.id);
  },
};
</script>

<style scoped>
h3 {
  color: #a9cfe4;
  text-align: left;
  margin: 1.5rem;
}
span {
  color: #a3abaf;
}

div.spinner img {
  margin-top: 50px;
  width: 100px;
}

h3.no-results {
  color: whitesmoke;
  margin-top: 50px;
}

div.container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-bottom: 100px;
}
input {
  display: flex;
  background-color: #607d8b;
  border: 2px solid #546e7a;
  align-self: flex-start;
  border-radius: 3px;
  box-shadow: 3px 3px 10px -5px black;
  color: #607d8b;
  font-size: 1.2rem;
  margin-left: 1rem;
  outline: 0;
  padding: 1rem;
  transition: all 600ms ease;
}
.list {
  max-width: 30%;
  min-width: 250px;
}
input:active,
input:focus {
  background-color: rgba(250, 250, 250, 0.6);
}
input::placeholder {
  color: #fafafa;
}
</style>
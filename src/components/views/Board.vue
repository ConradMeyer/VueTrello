<template>
  <section class="board">
    <h3><span>Mis paneles</span> ▸ {{ list.name }}</h3>
    <input
      type="text"
      ref="input"
      placeholder="Añade una lista"
      v-model="listName"
      @keyup.enter="addBoardList()"
      @mousedown="move"
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
        :class="color"
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
    ...mapState(["list", "color"]),
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
    move(e) {
      console.log(e);
      let odiv = e.target;
      this.$refs.input.setAttribute("data-flag", false);
      let disX = e.clientX - odiv.offsetLeft;
      let disY = e.clientY - odiv.offsetTop;
      document.onmousemove = (e) => {
        let left = e.clientX - disX;
        let top = e.clientY - disY;

        this.positionX = top;
        this.positionY = left;

        odiv.style.left = left + "px";
        odiv.style.top = top + "px";
      };
      document.onmouseup = (e) => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
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
  margin-top: 100px;
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
  cursor: pointer;
  position: absolute;
  z-index: 2;
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
div.red {
  background-color: rgba(197, 72, 72, 0.8);
}
div.black {
  background-color: rgba(170, 182, 64, 0.8);
}
div.blue {
  background-color: rgba(77, 189, 92, 0.8);
}
div.yellow {
  background-color: rgba(70, 165, 160, 0.8);
}
div.coral {
  background-color: rgba(119, 107, 189, 0.8);
}
div.brown {
  background-color: rgba(165, 78, 146, 0.8);
}
</style>
<template>
  <div class="column">
    <header>
      <h3>{{ name }}</h3>
      <img src="../assets/cross.svg" alt="delete" @click="deleteList()" />
    </header>
    <TaskList :tasks="tasks" @addTask="addTask" @deleteTask="deleteTask" />
  </div>
</template>

<script>
import TaskList from "@/components/TaskList";

export default {
  name: "column",
  components: { TaskList },
  props: {
    name: String,
    tasks: Array,
  },
  data() {
    return {
      data: [],
    };
  },
  computed: {
  },
  methods: {
    deleteList() {
      this.$emit('deleteBoardList', this.name)
    },
    addTask(task) {
      const obj = {
        task,
        name:this.name
      }
      this.$emit('addNewTask', obj)
    },
    deleteTask(task) {
      const obj = {
        task,
        name: this.name
      }
      this.$emit('deleteNewTask', obj)
    }
  },
};
</script>

<style lang="scss" scoped>
div.column {
  background-color: #eceff1;
  border-radius: 3px;
  box-shadow: 3px 3px 10px -5px black;
  margin: 1rem;
  padding: 1rem;
  width: 100%;
}
header {
  color: #37474f;
  margin: 0;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 15px;
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
}
h3 {
  margin: 0;
}
</style>
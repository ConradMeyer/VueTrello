<template>
  <div class="tasks">
    <div v-for="(task, index) in tasks" :key="index">
      {{ task.task }}
      <img src="../assets/cross.svg" alt="delete" @click="delet(task.task)" />
    </div>
    <input
      type="text"
      placeholder="Add a new task..."
      v-model="title"
      @keyup.enter="add()"
    />
  </div>
</template>

<script>
export default {
  name: "task-list",
  props: {
    tasks: Array,
  },
  data() {
    return {
      title: "",
    };
  },
  methods: {
    delet(task) {
      this.$emit("deleteTask", task);
    },
    add() {
      if (this.title !== "") {
        const task = {
          task: this.title,
          completed: false,
        };
        this.$emit("addTask", task);
        this.title = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
div.tasks {
  display: flex;
  flex-direction: column;
  div {
    list-style: none;
    background-color: #fafafa;
    border-radius: 3px;
    border-bottom: 1px solid #ccc;
    margin: 0.25rem 0;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 12px;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
li.completed {
  background-color: #cfd8dc;
  color: #90a4ae;
}

input {
  box-sizing: border-box;
  background-color: #eceff1;
  border: none;
  border-radius: 3px;
  font-size: 1rem;
  margin: 0.5rem;
  outline: 0;
  padding: 0.75rem 0;
  transition: background-color 600ms ease;
  width: 100%;
}
input:focus,
input:active {
  background-color: #fafafa;
  border-bottom: 1px solid #ccc;
  margin: 0.25rem 0;
  padding: 1rem;
}

input::placeholder {
  color: #90a4ae;
}
</style>
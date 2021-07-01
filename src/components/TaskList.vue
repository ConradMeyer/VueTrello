<template>
  <div class="tasks">
    <div v-for="(task, index) in tasks" :key="index">
      <div
        class="task"
        @dblclick="completed(task)"
        :class="task.completed ? 'completed' : 'not-completed'"
      >
        <h4>
          {{ task.task }}
        </h4>
        <img src="../assets/cross.svg" alt="delete" @click="delet(task.task)" />
      </div>
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
    completed(task) {
      const obj = {
        task: task.task,
        completed: !task.completed,
      };
      this.$emit("editTask", obj);
    },
  },
};
</script>

<style lang="scss" scoped>
div.tasks {
  display: flex;
  flex-direction: column;
  div.task {
    list-style: none;
    background-color: #fafafa;
    border-radius: 3px;
    border-bottom: 1px solid #ccc;
    margin: 0.25rem 0;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    img {
      width: 12px;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
div.completed {
  text-decoration: line-through red 2px;
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
  margin: 0.25rem 0;
  padding: 1rem;
}
input:focus,
input:active {
  background-color: #fafafa;
  border-bottom: 1px solid #ccc;
  // margin: 0.25rem 0;
  // padding: 1rem;
}

input::placeholder {
  color: #90a4ae;
}
</style>
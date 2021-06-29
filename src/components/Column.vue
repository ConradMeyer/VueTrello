<template>
  <div class="column">
    <header>
      <h3>{{ name }}</h3>
    </header>
    <TaskList :listId="listId" :tasks="tasks" />
  </div>
</template>

<script>
import TaskList from "@/components/TaskList";

export default {
  name: "column",
  components: { TaskList },
  props: {
    listId: Number,
    name: String,
    tasks: Array
  },
  data() {
    return {
      data: [],
    };
  },
};
</script>

<style scoped>
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
}
h3 {
  margin: 0;
}
</style>
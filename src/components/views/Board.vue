<template>
  <section class="board">
    <h3><span>Mis paneles</span> ▸ {{ list.name }}</h3>
    <input
      type="text"
      placeholder="Añade una lista"
      v-model="listName"
      @keyup.enter="add()"
    />
    <div class="container">
      <Column
        class="list"
        v-for="(list, index) in list.boardList"
        :key="index"
        :listId="list.id"
        :name="list.name"
        :tasks="list.tasksList"
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
    id: String,
  },
  data() {
    return {
      listName: "",
    };
  },
  computed: {
    ...mapState(['list'])
  },
  methods: {
    ...mapActions(['getList'])
  },
  created() {
    this.getList(this.id)
  }
};
</script>

<style scoped>
h3 {
  color: #37474f;
  text-align: left;
  margin: 1.5rem;
}
span {
  color: #546e7a;
}
div.container {
  width: 100%;
  margin: 5px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 100px;
}
input {
  display: flex;
  background-color: #607d8b;
  border: none;
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
  background-color: #fafafa;
}
input::placeholder {
  color: #fafafa;
}
</style>
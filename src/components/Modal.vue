<template>
  <div class="modal" :id="flag">
    <h1>COLORS</h1>
    <div class="container"></div>
    <div v-for="item in this.colors" :key="item.id">
      <div class="color" :class="item" @click="change(item)"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "modal",
  data() {
    return {
      colors: ["red", "black", "blue", "yellow", "coral", "brown", "default"],
    };
  },
  computed: {
    ...mapState(["flag", "color"]),
  },
  methods: {
    ...mapActions(["handleColor", "toggleFlag"]),
    change(item) {
      this.handleColor(item);
      this.toggleFlag();
    },
  },
};
</script>

<style lang="scss" scoped>
div.modal {
  background-color: rgba(0, 0, 0, 0.7);
  color: whitesmoke;
  height: 100vh;
  width: 25%;
  position: absolute;
  z-index: 3;
  left: -25%;
  transition: all 1500ms ease;
  h1 {
    margin: 20px auto;
  }
}
div.modal#true {
  left: 0;
}
div.color {
  margin: 20px auto;
  background-color: grey;
  width: 70%;
  height: 50px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 3px 3px 10px -5px black;
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
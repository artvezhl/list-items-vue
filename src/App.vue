<template>
  <main class="main">
    <h1 class="title">Test</h1>
    <ListConstructor :lists="getLists" />
    <ListView :lists="getLists" />
  </main>
</template>

<script>
import ListConstructor from "./components/ListConstructor.vue";
import ListView from "./components/ListView.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    ListConstructor,
    ListView,
  },
  methods: {
    ...mapActions(['collectLists', 'changeAsync']),
  },
  created() {
    this.collectLists();
  },
  computed: mapGetters(["getLists"]),
};
</script>

<style>
.main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 30px 20px;

  height: calc(100vh - 94px);

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 20px 1fr;
  grid-template-areas:
    "title title"
    "constructor view";
  grid-column-gap: 80px;
  grid-row-gap: 80px;
}

.title {
  grid-area: title;
}
</style>

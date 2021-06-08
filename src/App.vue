<template>
  <h1 class="title">Test</h1>
  <ListConstructor :data="lists" />
  <ListView />
</template>

<script>
import ListConstructor from "./components/ListConstructor.vue";
import ListView from "./components/ListView.vue";

export default {
  name: "App",
  components: {
    ListConstructor,
    ListView,
  },
  data() {
    return {
      lists: [
        {
          id: 1,
          name: "List 1",
          isChecked: false,
          items: [
            {
              id: 11,
              name: "item 1",
              isChecked: false,
              value: 0,
              color: "red",
            },
            {
              id: 12,
              name: "item 2",
              isChecked: false,
              value: 0,
              color: "red",
            },
            {
              id: 13,
              name: "item 3",
              isChecked: false,
              value: 0,
              color: "red",
            },
          ],
        },
        {
          id: 2,
          name: "List 2",
          isChecked: false,
          items: [
            {
              id: 21,
              name: "item 1",
              isChecked: false,
              value: 0,
              color: "red",
            },
            {
              id: 22,
              name: "item 2",
              isChecked: false,
              value: 0,
              color: "red",
            },
            {
              id: 23,
              name: "item 3",
              isChecked: false,
              value: 0,
              color: "red",
            },
          ],
        },
        {
          id: 3,
          name: "List 3",
          isChecked: false,
          items: [
            {
              id: 31,
              name: "item 1",
              isChecked: false,
              value: 0,
              color: "red",
            },
            {
              id: 32,
              name: "item 2",
              isChecked: false,
              value: 0,
              color: "red",
            },
            {
              id: 33,
              name: "item 3",
              isChecked: false,
              value: 0,
              color: "red",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
#app {
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

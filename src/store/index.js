import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
            value: 80,
            color: "red"
          },
          {
            id: 12,
            name: "item 2",
            isChecked: false,
            value: 50,
            color: "yellow"
          },
          {
            id: 13,
            name: "item 3",
            isChecked: false,
            value: 30,
            color: "green"
          }
        ]
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
            value: 80,
            color: "red"
          },
          {
            id: 22,
            name: "item 2",
            isChecked: false,
            value: 50,
            color: "yellow"
          },
          {
            id: 23,
            name: "item 3",
            isChecked: false,
            value: 30,
            color: "green"
          }
        ]
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
            value: 80,
            color: "red"
          },
          {
            id: 32,
            name: "item 2",
            isChecked: false,
            value: 50,
            color: "yellow"
          },
          {
            id: 33,
            name: "item 3",
            isChecked: false,
            value: 30,
            color: "green"
          }
        ]
      }
    ]
  },
  getters: {
    getLists(store) {
      return store.lists;
    }
  }
});

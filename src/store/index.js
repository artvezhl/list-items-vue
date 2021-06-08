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
            color: "#FF0000"
          },
          {
            id: 12,
            name: "item 2",
            isChecked: false,
            value: 50,
            color: "#FFFF00"
          },
          {
            id: 13,
            name: "item 3",
            isChecked: false,
            value: 30,
            color: "#008000"
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
            color: "#FF0000"
          },
          {
            id: 22,
            name: "item 2",
            isChecked: false,
            value: 50,
            color: "#FFFF00"
          },
          {
            id: 23,
            name: "item 3",
            isChecked: false,
            value: 30,
            color: "#008000"
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
            color: "#FF0000"
          },
          {
            id: 32,
            name: "item 2",
            isChecked: false,
            value: 50,
            color: "#FFFF00"
          },
          {
            id: 33,
            name: "item 3",
            isChecked: false,
            value: 30,
            color: "#008000"
          }
        ]
      }
    ]
  },
  mutations: {
    setCurrentItem(state, newItem) {
      let currentItem = {};
      for (let list of state.lists) {
        const result = list.items.find((item) => item.id === newItem.id);
        if (result) currentItem = result;
      }
      state.lists.forEach((list) => {
        list.items.find((item) => item.id === newItem.id);
      });
      console.log(newItem);
      console.log(currentItem);
      currentItem = { ...newItem };
    }
  },
  getters: {
    getLists(store) {
      return store.lists;
    }
  }
});

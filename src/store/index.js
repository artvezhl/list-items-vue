import Vue from "vue";
import Vuex from "vuex";

import { lists } from "../data/lists";

Vue.use(Vuex);

const loadLists = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(lists);
    }, 1000);
  });
};

export default new Vuex.Store({
  state: {
    lists: []
  },
  actions: {
    async collectLists({ commit }) {
      try {
        const lists = await loadLists();
        commit("SET_LISTS", lists);
      } catch (e) {
        console.error(e);
      }
    }
  },
  mutations: {
    SET_LISTS(state, lists) {
      state.lists = lists;
    },
    UPDATE_LISTS(state, newItem) {
      state.lists.map((list, id) => {
        let listId = 0;
        let itemsId = 0;
        let newLists = [...state.lists];
        for (let i = 0; i < list.items.length; i++) {
          if (list.items[i].id === newItem.id) {
            listId = id;
            itemsId = i;
          }
        }
        newLists[listId].items[itemsId] = { ...newItem };
        console.log(newLists);
        state.lists = JSON.parse(JSON.stringify(newLists));
      });

      let currentItem = {};
      for (let list of state.lists) {
        const result = list.items.find((item) => item.id === newItem.id);
        if (result) currentItem = result;
      }
      state.lists.forEach((list) => {
        list.items.find((item) => item.id === newItem.id);
      });
    }
  },
  getters: {
    getLists(store) {
      return store.lists;
    }
  }
});

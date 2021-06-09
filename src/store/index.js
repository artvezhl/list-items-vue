import Vue from "vue";
import Vuex from "vuex";

import { lists } from '../data/lists'

Vue.use(Vuex);

const loadLists = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(lists)
    }, 1000)
  })
}

export default new Vuex.Store({
  state: {
    lists: [],
  },
  actions: {
    async collectLists({ commit }) {
      try {
        const lists = await loadLists();
        commit('SET_LISTS', lists);
      } catch(e) {
        console.error(e);
      }
    },
    changeAsync ({ commit }) {
      setTimeout(() => {
        commit('UPDATE_LISTS')
      }, 1000)
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
        for (let i = 0; i < list.items.length; i++) {
          if (list.items[i].id === newItem.id) {
            listId = id;
            itemsId = i;
          }
          state.lists[listId].items[itemsId] = { ...newItem };
        }
      })

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
    }
  },
  getters: {
    getLists(store) {
      return store.lists;
    }
  }
});

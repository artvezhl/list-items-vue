<template>
  <div class="view__list">
    <div class="view__controls">
      <p class="view__list-title">{{ list.name }}</p>
      <button class="view__button">Перемешать</button>
    </div>
    <div
      class="view__items"
      v-for="item in list.items"
      :key="Math.floor(Math.random() * Date.now())"
    >
      {{ item.value }}
      <div v-for="i in item.value" :key="i.id">
        <div class="view__item" :style="{ background: item.color }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListViewItem",
  props: {
    list: Object,
  },
  data() {
    return {
      index: 0,
    };
  },
};
</script>

<style scoped>
.view__controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.view__list-title {
  margin: 0;
}

.view__button {
  background: dodgerblue;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 6px 10px;
  cursor: pointer;
}

.view__button:hover {
  background: #0465D9;
}

.view__items {
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
}

.view__item {
  width: 10px;
  height: 10px;
  margin: 0 3px 3px 0;
}
</style>
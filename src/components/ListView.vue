<template>
  <section class="view">
    <div class="view__list">
      <div class="view__controls">
        <p class="view__list-title">List 1</p>
        <button class="view__button">Перемешать</button>
      </div>
      <div class="view__items" v-for="item in list" :key="item.id">
        <div v-for="i in item.count" :key="i">
          <div class="view__item" :style="{ background: item.color }"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ListView",
  data() {
    return {
      list: [
        {
          id: 1,
          color: "red",
          count: 52,
        },
        {
          id: 2,
          color: "yellow",
          count: 80,
        },
        {
          id: 3,
          color: "green",
          count: 32,
        },
      ],
    };
  },
};
</script>

<style scoped>
.view {
  height: 100%;
  border: 2px black solid;
  padding: 20px 30px;
}

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
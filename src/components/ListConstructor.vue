<template>
  <section class="constructor">
    <constructor-item v-for="list in lists" :key="list.id" :list="list" />
  </section>
</template>

<script>
import ConstructorItem from "./ConstructorItem";
export default {
  components: {
    "constructor-item": ConstructorItem,
  },
  props: {
    lists: Array,
  },
};
</script>

<style scoped>
.constructor {
  height: 100%;
  padding: 20px 30px;
  border: 2px black solid;
  text-align: start;
  grid-area: constructor;
}
</style>

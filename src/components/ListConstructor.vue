<template>
  <section class="constructor">
    <ConstructorItem v-for="list in lists" :key="list.id" :list="list" />
  </section>
</template>

<script>
import ConstructorItem from "./ConstructorItem";
export default {
  components: {
    ConstructorItem,
  },
  computed: {
    lists() {
      return this.$store.state.lists;
    },
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

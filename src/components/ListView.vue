<template>
  <section class="view">
    <ListViewItem v-for="list in lists" :key="list.id" :list="list" />
  </section>
</template>

<script>
import ListViewItem from "./ListViewItem";

export default {
  name: "ListView",
  components: {
    ListViewItem,
  },
  props: {
    lists: Array,
  },
};
</script>

<style scoped>
.view {
  height: 100%;
  border: 2px black solid;
  padding: 20px 30px;
}
</style>
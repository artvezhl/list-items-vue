<template>
  <section class="view">
    <list-view-item v-for="list in lists" :key="list.id" :list="list" />
  </section>
</template>

<script>
import ListViewItem from "./ListViewItem";

export default {
  name: "ListView",
  components: {
    "list-view-item": ListViewItem,
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
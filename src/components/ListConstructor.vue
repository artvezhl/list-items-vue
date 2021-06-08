<template>
  <section class="constructor">
    <ConstructorItem />
    {{ lists }}
  </section>
</template>

<script>
import ConstructorItem from "./ConstructorItem";
export default {
  components: {
    ConstructorItem,
  },
  props: ["lists"],
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

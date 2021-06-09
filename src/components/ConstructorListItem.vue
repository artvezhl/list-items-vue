<template>
  <div class="constructor__checkbox">
    <input
      @input="submit"
      type="checkbox"
      :id="item.id"
      :name="item.name"
      v-model="item.isChecked"
    />
    <label :for="item.name">{{ item.name }}</label>

    <input
      @input="submit"
      type="number"
      min="0"
      max="100"
      v-model="item.value"
    />

    <input
      @input="submit"
      type="color"
      :id="item.name + '-color'"
      v-model="item.color"
    />
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    item: Object,
  },
  methods: {
    ...mapMutations({
      updateLists: "UPDATE_LISTS",
    }),
    submit() {
      this.updateLists({
        ...this.item,
        value: Number(this.item.value),
      });
    },
  },
};
</script>

<style scoped>
</style>
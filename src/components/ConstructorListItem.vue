<template>
  <div class="constructor__checkbox">
    <input
      @input="submit"
      type="checkbox"
      :id="currentItem.id"
      :name="currentItem.name"
      v-model="currentItem.isChecked"
    />
    <label :for="currentItem.name">{{ currentItem.name }}</label>

    <input
      @input="submit"
      type="number"
      min="0"
      max="100"
      v-model="currentItem.value"
    />

    <input
      @input="submit"
      type="color"
      :id="currentItem.name + '-color'"
      v-model="currentItem.color"
    />
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      currentItem: {
        id: this.item.id,
        name: this.item.name,
        isChecked: this.item.isChecked,
        value: this.item.value,
        color: this.item.color,
      },
    };
  },
  props: {
    item: Object,
  },
  methods: {
    ...mapMutations({
      updateLists: "UPDATE_LISTS",
    }),
    submit() {
      this.updateLists({
        ...this.currentItem,
        value: Number(this.currentItem.value),
      });
    },
  },
};
</script>

<style scoped>
</style>
<template>
  <div class="constructor__item">
    <div class="constructor__block">
      <button
        class="constructor__arrow"
        :class="{ constructor__list_isOpen: show }"
        @click="show = !show"
      >
        <svg
          width="15.000000000000002"
          height="17.999999999999996"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <title>Layer 1</title>
            <line
              stroke="#000"
              id="svg_14"
              y2="9.28345"
              x2="12.1394"
              y1="1.1129"
              x1="3.51229"
              stroke-width="1.5"
              fill="none"
            />
            <line
              stroke="#000"
              id="svg_15"
              y2="8.6514"
              x2="11.73758"
              y1="16.80268"
              x1="3.64436"
              stroke-width="1.5"
              fill="none"
            />
          </g>
        </svg>
      </button>
      <input
        type="checkbox"
        id="list"
        name="list"
        value="yes"
        :checked="isChecked"
      />
      <label class="constructor__title" for="list">{{ list.name }}</label>
    </div>
    <transition name="fade">
      <div v-if="show" class="constructor__checkboxes">
        <div class="constructor__checkbox">
          <input type="checkbox" id="item1" name="item" />
          <label for="item1">item 1</label>

          <input type="number" min="0" max="100" />

          <input type="color" id="item1-color" />
        </div>
        <div class="constructor__checkbox">
          <input type="checkbox" id="item1" name="item" />
          <label for="item1">item 1</label>
          <input type="number" min="0" max="100" />
          <input type="color" id="item1-color" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    list: Object,
  },
  data() {
    return {
      show: true,
      isChecked: true,
    };
  },
};
</script>

<style scoped>
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}

.custom-checkbox + label::before {
  content: "";
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #000;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
}

.custom-checkbox:checked + label::before {
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2214.4%22%20height%3D%2214.4%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%0A%20%3Cg%3E%0A%20%20%3Ctitle%3ELayer%201%3C%2Ftitle%3E%0A%20%20%3Cline%20stroke%3D%22%23000%22%20id%3D%22svg_4%22%20y2%3D%2211.47113%22%20x2%3D%226.27912%22%20y1%3D%226.53334%22%20x1%3D%221.20009%22%20fill%3D%22none%22%2F%3E%0A%20%20%3Cline%20stroke%3D%22%23000%22%20id%3D%22svg_5%22%20y2%3D%2211.53327%22%20x2%3D%225.70002%22%20y1%3D%223.53339%22%20x1%3D%2212.69992%22%20fill%3D%22none%22%2F%3E%0A%20%20%3Cline%20id%3D%22svg_6%22%20y2%3D%226.03335%22%20x2%3D%2227.6997%22%20y1%3D%226.03335%22%20x1%3D%2227.53303%22%20stroke%3D%22%23000%22%20fill%3D%22none%22%2F%3E%0A%20%3C%2Fg%3E%0A%3C%2Fsvg%3E");
  /*background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2225%22%20height%3D%2225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%0A%20%3Cg%3E%0A%20%20%3Ctitle%3ELayer%201%3C%2Ftitle%3E%0A%20%20%3Crect%20id%3D%22svg_13%22%20height%3D%226%22%20width%3D%226%22%20y%3D%229.17742%22%20x%3D%229.72581%22%20stroke-width%3D%221.5%22%20stroke%3D%22%23000%22%20fill%3D%22%23000000%22%2F%3E%0A%20%3C%2Fg%3E%0A%3C%2Fsvg%3E");*/
}

.constructor__item {
  margin-bottom: 20px;
}

.constructor__block {
  display: flex;
  align-items: center;
}

.constructor__arrow {
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 10px 10px;
  transform: rotate(0deg);
  transition: 0.5s;
}

.constructor__list_isOpen {
  transform: rotate(90deg);
  transition: 0.5s;
}

.constructor__title {
  margin: 0;
}

.constructor__checkboxes {
  padding: 0 40px;
}

.constructor__checkbox {
  display: flex;
  justify-content: space-between;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
<template>

<div class="menu"  v-if="after" @open-side-menu="test()">
  <div class="screen" :class="{ active: active, inactive: !active }" @click="closeMenu()"></div>
  <aside class="side-menu" :class="{ active: active, inactive: !active }">
    <ul>
    <slot></slot>
    </ul>
  </aside>
</div>

</template>

<script>

export default {

  name: 'side-menu',

  props: { active: Boolean },

  data() {

    return { after: false }
  },

  methods: {
    closeMenu() { this.$emit('close-menu') }
  },

  watch: {
    active(value) {

      if(value) return this.after = value
      setTimeout(() => this.after = value, 500)
    }
  }
}

</script>

<style lang="scss" scoped>

$time: 0.5s;

@mixin show-menu($enter, $out) {

  position: fixed;
  height: 100%;

  &.active {
    animation-name: $enter;
    animation-duration: $time;
    animation-fill-mode: forwards;
  }

  &.inactive {
    animation-name: $out;
    animation-duration: $time;
    animation-fill-mode: backwards;
  }
}

.menu {

  .side-menu {
    right: 0;
    width: 0;
    background: white;
    box-shadow: 0px 0px 5px #24292e;
    @include show-menu(active, deactive);
  }

  .screen {
    opacity: 0;
    width: 100%;
    background-color: black;
    @include show-menu(shadow, clear);
  }
}

// Screen Animation
@keyframes shadow {
  from { opacity: 0 }
  to { opacity: 0.5 }
}
@keyframes clear {
  from { opacity: 0.5 }
  to { opacity: 0 }
}

// Side Menu Animation
@keyframes active {
  from { width: 0px; }
  to { width: 250px; }
}

@keyframes deactive {
  from { width: 250px; }
  to { width: 0px; }
}

</style>

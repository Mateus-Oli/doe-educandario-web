<template>

<section>
  <header class="menu">
    <span>{{ title }}</span>
    <span class="options" @click="active = true">...</span>
  </header>
  <side-menu :active="active" @close-menu="active = false">
    <slot></slot>
  </side-menu>
</section>

</template>

<script>

import * as SideMenu from './side-menu'

export default {

  name: 'doe-menu',

  components: { SideMenu },

  props: { title: String },

  data() {

    return { active: false }
  },

  watch: {
    active: (v) => console.log(v)
  }
}

</script>

<style lang="scss" scoped>

.menu {

  position: fixed;
  width: 100%;

  display: flex;
  justify-content: space-between;

  padding: 5px;
  background-color: #24292e;
  box-shadow: 0px 0px 5px darkgreen inset;

  color: white;
  font-size: 25px;
  font-family: sans-serif;
  text-transform: uppercase;

  .options {

    padding: 0 20px;
    cursor: pointer;
    transition: 0.5s;
    border-radius: 1000px;

    &:active {
      background: darkgrey;
    }
  }
}
</style>

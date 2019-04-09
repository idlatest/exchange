<template>
  <div v-show="active" :id="hash">
    <slot />
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: false
    }
  },
  props: {
    name: {
      required: true,
      type: String
    }
  },
  computed: {
    hash () {
      return `${this.name.toLowerCase().replace(/ /g, '-')}`
    }
  }
}
</script>

<style>

</style>

<template>
  <div>Hello, {{ name }}!</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    name: {
      type: String,
      default: 'World'
    }
  },
  setup(props) {
  }
})
</script>
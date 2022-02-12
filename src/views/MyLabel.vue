<template>
    <div class="">{{ text }}</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    text: { type: String, required: true },
  },
  data() {
    return {
      // text: 'default label text',
    };
  },
  methods: {
    changeText(val: string) {
      // this.text = val;
    },
  },
});
</script>

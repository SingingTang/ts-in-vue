<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{name}}{{size}}</p>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <!-- <MyButton status="fda" /> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

// import MyButton from './MyButton1.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    HelloWorld,
    // MyButton,
  },
  props: {
    type: {
      type: String,
      default: 'default',
    },
    size: String,
    icon: {
      type: String,
      default: '',
    },
    nativeType: {
      type: String,
      default: 'button',
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
  },
  data() {
    return {
      name: '',
    };
  },
});
</script>

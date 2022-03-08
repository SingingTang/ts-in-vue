<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{companyState.window}}</p>
    <button @click="updateWindow">click</button>
    <!-- <MyButton v-model="myButtonValue"/> -->
    <!-- <p>myButtonValue: {{myButtonValue}}</p> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <MyButton1  @update-status="updateStauts" v-model="myButtonValue" status="fda" />
    <MyButton2 />
  </div>
</template>

<script lang="ts">
import { getModule } from 'vuex-module-decorators';
import Vue from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import MyButton1 from './MyButton1.vue';
import MyButton from './MyButton.vue';
import MyButton2 from './MyButton2.vue';
import company from '../store/modules/company';

export default Vue.extend({
  name: 'Home',
  components: {
    // MyButton,
    MyButton1,
    MyButton2,
  },
  data() {
    return {
      name: '',
      myButtonValue: 'default button value',
      companyState: getModule(company),
    };
  },
  methods: {
    updateWindow():void{
      this.companyState.UPDATE_WINDOW({ common: [Math.random(), 'bb', 'cc'], special: ['aa'] });
    },
    // reset
  },

});
</script>

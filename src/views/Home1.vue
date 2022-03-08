<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>home</p>
    <MyButton v-model="myButtonValue"/>
    <p>myButtonValue: {{myButtonValue}}</p>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <MyButton1 @reset="reset" @update-status="updateStauts" v-model="myButtonValue" status="fda" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import MyButton1 from './MyButton1.vue';
import MyButton from './MyButton.vue';

@Component({
  components: {
    MyButton1, MyButton,
  },
})
export default class Home1 extends Vue {
    myButtonValue = ''

    reset() : void{
      //

    }

    updateStauts():void {
      //
    }
}
</script>

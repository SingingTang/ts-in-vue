<template>
  <div>
    <p>{{ list }}</p>
    <p v-show="isNoData">no data</p>
    <p>{{ userNames }}</p>
    <p>
      {{ user && user.name }}
    </p>
    <MyLabel text="123" ref="myLabel"/>
  </div>
</template>
<script lang="ts">
import {
  Component, Prop, Vue, Watch, Ref,
} from 'vue-property-decorator';

import { mixins } from 'vue-class-component';
import userMixin from './user-mixin';
import componentStatusMixin from './component-status-mixin';
import MyLabel from './MyLabel.vue';

enum EStuatus {
    SUCCESS = 'success',
    FAIL = 'fail',
    PENDING = 'pending'
}
interface IUser {
  name: string,
  id: string,
  isVip: boolean,
  age: number,
}

@Component({
  components: {
    MyLabel,
  },
})
export default class MyButton extends userMixin {
    @Ref('myLabel') myLabelRef: InstanceType<typeof MyLabel>;

    @Prop() status!: EStuatus;

    list: IUser[] = [];

    name = '';

    age = 18;

    noReactiveName!: string;

    get isNoData(): boolean {
      return this.list.length > 0;
    }

    get userNames(): IUser['name'][] {
      return this.list.map((user) => user.name);
    }

    @Watch('status', { deep: true, immediate: true })
    handleStatusChange(val:EStuatus, oldVal:EStuatus):void {
      console.log('status watach', val, oldVal);
      this.name = 'hello';
    }

    @Watch('user', { deep: true })
    handleUserChange():void {
      console.log('user change');
      console.log(this.user);
      this.printUser();
    }

    created(): void{
      this.myLabelRef.changeText('hello');
      this.$loading.show();
    }
}
</script>

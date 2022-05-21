<template>
  <div>
    <p>11111: {{id}}</p>
    <p>{{ list }}</p>
    <p v-show="isNoData">no data</p>
    <p>{{ userNames }}</p>
    <p>companyInfo: {{ companyState.companyInfo }}</p>
    <button @click="companyState.getName">get company name</button>
    <button @click="handleChangeCompanyNameButtonClcik">change company name</button>
    <p>
      {{ user }}
    </p>
    <p>user id : {{userId}}</p>
    <MyLabel text="123" ref="myLabel"/>
    <button @click="handleChangeUser">change user</button>
    <input type="text" v-model="buttonValue">
    <button @click="updateStatus">update status</button>
  </div>
</template>
<script lang="ts">
import {
  Component, Prop, Vue, Watch, Ref, Model, ProvideReactive,
  ModelSync, PropSync, Emit, VModel, Provide,
} from 'vue-property-decorator';

import { getModule } from 'vuex-module-decorators';

import { State, Action, Getter } from 'vuex-class';

// import { mixins } from 'vue-class-component';
import { Store } from 'vuex';
import company from '../store/modules/company';
import userMixin from './user-mixin';
// import componentStatusMixin from './component-status-mixin';
import MyLabel from './MyLabel.vue';

// eslint-disable-next-line no-shadow
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

export default class MyButton extends Vue {
  @State('userInfo', { namespace: 'user' }) user!: Store.IUser['userInfo'];

  @State((state: Store.IUser) => state.userInfo.id, { namespace: 'user' }) userId!: Store.IUser['userInfo']['id']

  @Getter('id', { namespace: 'user' }) id!: string

  @Action('getUser', { namespace: 'user' })
  getUser: () => void;

  @Prop({ type: String }) status!: EStuatus;

  companyState = getModule(company);

  get currentStatus(): EStuatus {
    return this.status;
  }

  set currentStatus(val: EStuatus) {
    this.$emit('update:status', val);
  }

  @Model('change', { type: String }) value!: string;

  get buttonValue():string {
    return this.value;
  }

  set buttonValue(val: string) {
    this.$emit('change', val);
  }

    @Ref('myLabel') myLabelRef: InstanceType<typeof MyLabel>;

    list: IUser[] = [];

    // name = '';

    age = 18;

    noReactiveName!: string;

    created(): void{
      this.noReactiveName = 'no reactive name';
    }

    get isNoData(): boolean {
      return this.list.length > 0;
    }

    get userNames(): IUser['name'][] {
      return this.list.map((user) => user.name);
    }

    @Watch('status', { deep: true, immediate: true })
    handleStatusChange(val:EStuatus, oldVal:EStuatus):void {
      console.log('status watach', val, oldVal);
      // this.$router.push({ name: 'haha' });
      // this.name = 'hello';
    }

    @Watch('user', { deep: true })
    handleUserChange():void {
      console.log('user change');
      console.log(this.user);
    }

    updateStatus(val:EStuatus): void {
      this.$emit('update-status', val);
    }

    handleResetStatus():void {
      this.$emit('reset', EStuatus.PENDING);
    }

    handleChangeUser():void{
      this.getUser();
    }

    handleChangeCompanyNameButtonClcik() {
      this.companyState.changeName('哈哈哈公司');
    }
}
</script>

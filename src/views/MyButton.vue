<template>
  <div>
    <p>{{ list }}</p>
    <p v-show="isNoData">no data</p>
    <p>{{ userNames }}</p>
    <p>{{ fullName }}</p>
    <p>
      {{ user && user.name }}
    </p>
    <MyLabel text="123" ref="myLabel"/>
  </div>
</template>
<script lang="ts">

import Vue, {
  VueConstructor, PropType, WatchHandler, WatchOptionsWithHandler,
} from 'vue';
import mixins from 'vue-typed-mixins';
import MyLabel from './MyLabel.vue';
import userMixin from './user-mixin';
import componentStatusMixin from './component-status-mixin';

interface IUser {
  name: string,
  id: string,
  isVip: boolean,
  age: number,
}
export default mixins(Vue as VueConstructor<Vue &
  {
    $refs: {
        myLabel: InstanceType<typeof MyLabel>
      };
    noReactiveName: string,
  }>, userMixin, componentStatusMixin).extend({
  props: {
    status: { type: String, default: 'success' },
  },
  components: { MyLabel },

  // callback: { type: Function as PropType<(user: IUser) => void>, required: true },
  data() : { firstName: string, lastName: string, name: string, list: IUser[] } {
    return {
      list: [],
      name: '',
      firstName: '',
      lastName: '',
    };
  },
  mounted() {
    this.list = [
      {
        name: 'singing000', id: '0001', isVip: true, age: 18,
      },
      {
        name: 'singing001', id: '0002', isVip: true, age: 19,
      },
    ];
    this.fullName = ['singing', 'tang'];
    this.noReactiveName = 'hahahahah';
    console.log(this.$isH5);
    this.$loading.show();
  },
  methods: {
    handleClick(evt: EventTarget) {
      this.$emit('click', 'ahah');
      console.log(this.user);
      console.log(this.isActivated);
    },
  },
  watch: {
    user(val: IUser) {
      console.log('user watch', val);
    },
    status: function _(val) {
      console.log('status watch', val);
    } as WatchHandler<string>,
    type: {
      handler(val, oldVal) {
        console.log('type watch', val, oldVal);
      },
      immediate: true,
      deep: true,
    } as WatchOptionsWithHandler<string>,
  },
  computed: {

    isNoData(): boolean {
      return this.list.length > 0;
    },
    userNames(): IUser['name'][] {
      return this.list.map((user) => user.name);
    },
    fullName: {
      get(): string {
        return this.firstName + this.lastName;
      },
      set(val: string | string[]) {
        const fullNameArr = typeof val === 'string' ? val.split(' ') : val;
        [this.firstName, this.lastName] = fullNameArr;
        this.$refs.myLabel.changeText(fullNameArr.join(' '));
        // if (this.$refs.myLabel) {
        //   (this.$refs.myLabel).changeText(fullNameArr.join(' '));
        // }
      },

    },
  },

});
</script>

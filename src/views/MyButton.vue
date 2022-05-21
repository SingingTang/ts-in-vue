<template>
  <div>
    <input type="text" v-model="inputValue">
    <!-- <MyLabel text="123" ref="myLabel"/> -->
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

export default mixins(Vue as VueConstructor<Vue & {
  $refs: {
    myLabel: InstanceType<typeof MyLabel>
  },
  inject:{
    buttonValue: string
  },
  noReactiveName: string,
}>, userMixin, componentStatusMixin).extend({
  props: {
    status: { type: String, default: 'success' },
  },
  components: { MyLabel },

  model: {
    prop: 'value',
    event: 'change',
  },

  inject: {
    buttonValue: {
      from: 'buttonValue',
      default: '',
    },
  },

  provide(): { status: string } {
    return {
      status: this.status,
    };
  },

  data() : {
    firstName: string, lastName: string, name: string, list: IUser[], inputValue: string } {
    return {
      list: [],
      name: '',
      firstName: '',
      lastName: '',
      inputValue: '',
    };
  },
  methods: {
    handleClick() {
      this.$emit('click', 'ahah');
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

    inputValue() {
      this.$emit('change', this.inputValue);
    },
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
        // this.$refs.myLabel.changeText(fullNameArr.join(' '));
        // if (this.$refs.myLabel) {
        //   (this.$refs.myLabel).changeText(fullNameArr.join(' '));
        // }
      },

    },
  },

});
</script>

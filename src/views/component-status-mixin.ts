import Vue from 'vue';

type TIsActivated = boolean

export default Vue.extend({
  data() {
    return {
      isActivated: false as TIsActivated,
    };
  },
  methods: {
    changeIsActivate(val: TIsActivated) {
      this.isActivated = val;
    },
  },
});

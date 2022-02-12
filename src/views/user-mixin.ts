import Vue from 'vue';

interface IUser {
    name: string,
    id: string,
    age: number
}

export default Vue.extend({
  data() {
    return {
      user: null as IUser | null,
      isActivated: [],
    };
  },
  methods: {
    printUser() {
      console.log('user: ', this.user ? this.user.name : 'undefined');
    },
  },
});

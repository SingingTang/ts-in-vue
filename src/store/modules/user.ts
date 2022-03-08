/* eslint-disable no-param-reassign */
import {
  ActionTree, MutationTree, Module, Store, Getter,
} from 'vuex';

const initState = () :Store.IUser => ({
  userInfo: {
    id: '',
    name: '',
    isVip: false,
    age: 0,
  },
});

const actions: ActionTree<Store.IUser, Store.IRoot> = {
  async getUser({ commit }) {
    await new Promise((res) => setTimeout(res, 500));
    commit('UPDATE_USER', {
      id: `${Math.random()}`.substring(2),
      name: 'singing',
      isVip: true,
      age: 18,
    });
  },
};

const mutations : MutationTree<Store.IUser> = {
  UPDATE_USER(state, payload:Store.IUser['userInfo']) {
    state.userInfo = payload;
  },
};

const user: Module<Store.IUser, Store.IRoot> = {
  namespaced: true,
  state: initState(),
  actions,
  mutations,
};

export default user;

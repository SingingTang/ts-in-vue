import Vue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    $isH5: readonly boolean;
    $loading: readonly any;
    $test: string;
  }
}

export default Vue;

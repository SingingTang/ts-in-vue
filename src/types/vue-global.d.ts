import Vue from 'vue';

declare module 'vue/types/vue' {
  // eslint-disable-next-line no-shadow
  interface Vue {
    $isH5: readonly boolean;
    $loading: readonly any;
    $test: string;
  }
}

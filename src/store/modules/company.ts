import {
  Module, VuexModule, Mutation, Action,
} from 'vuex-module-decorators';
import Store from '../index';

@Module({
  dynamic: true,
  store: Store,
  name: 'company',
  namespaced: true,
})
export default class CompanyModule extends VuexModule {
    public name = ''

    public id = ''

    public marketType = ''

    public window: {common: any[], special: any[]} = {
      common: [],
      special: [],
    }

    get companyInfo(): string {
      return `id: ${this.id}, name: ${this.name}`;
    }

    @Mutation
    public UPDATE_NAME(payload: string): void {
      this.name = payload;
    }

    @Mutation
    public UPDATE_WINDOW(payload: {common: any[], special: any[]}):void{
      this.window = payload;
    }

    @Mutation
    public UPDATE_INFO(payload: { name: string, id: string, marketType: string}): void {
      this.name = payload.name;
      this.id = payload.id;
      this.marketType = payload.marketType;
    }

    @Action({ commit: 'UPDATE_NAME' })
    public changeName(val: string): string {
      return val;
    }

    @Action({ commit: 'UPDATE_NAME' })
    public getName(): string {
      return 'xxx-company';
    }

    @Action({ commit: 'UPDATE_INFO' })
    public async getInfo(): Promise<{ name: string, id: string, marketType: string}> {
      await new Promise((res) => setTimeout(res, 500));
      return {
        name: 'hahaha-company',
        id: `${Math.random()}`.substring(2),
        marketType: 'hk',
      };
    }
}

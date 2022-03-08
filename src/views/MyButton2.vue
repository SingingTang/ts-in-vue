<template>
    <div>
        <p>name: {{companyState.name}}</p>
        <p>id: {{companyState.id}}</p>
        <p>info: {{companyState.companyInfo}}</p>
        <button @click="companyState.getInfo">get info</button>

    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import company from '../store/modules/company';

@Component
export default class MyButton2 extends Vue {
    companyState = getModule(company)
}

</script>

<template>
  <div class="homedark">
    <TradingViewComponent/>
  </div>
</template>

<script>
import TradingViewComponent from '@/components/TradingViewComponent.vue'
import { Component, Vue } from 'vue-property-decorator'
import store from '../store'

@Component({components: {TradingViewComponent}})
export default class Home extends Vue {
    constructor(){
        super();
        //   context.commit('UPDATE_CHART_DATA', data);
        localStorage.clear();
          store.commit("updaetBG",'#313337');
    }
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>

<template>
  <div class="home">
    <TradingViewComponent />
  </div>
</template>

<script>
import TradingViewComponent from "@/components/TradingViewComponent.vue";
import { Component, Vue } from "vue-property-decorator";
import state from '../store/state';
import store from '../store'
@Component({ components: { TradingViewComponent } })
export default class Home extends Vue {
  constructor() {
    super();
    //   context.commit('UPDATE_CHART_DATA', data);
      localStorage.clear();
     console.log("stateee",state.bg);
    store.commit("updaetBG", "#fff");
   
  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>

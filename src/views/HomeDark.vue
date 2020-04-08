<template>
  <div class="homedark">
    <TradingViewComponent />
  </div>
</template>

<script lang="ts">
import TradingViewComponent from "@/components/TradingViewComponent.vue";
import { Component, Vue } from "vue-property-decorator";
import store from "../store";

@Component({ components: { TradingViewComponent } })
export default class Home extends Vue {
  coin: any = "BTC";
  to: any = "USD";

  mounted() {

  }

  constructor() {
    super();
    //   context.commit('UPDATE_CHART_DATA', data);
    localStorage.clear();
    // this.coin = this.$route.query.coin;
    // this.to = this.$route.query.to;

    store.commit("updaetBG", "#313337");
  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>

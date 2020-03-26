<template>
  <div class="home">
    <TradingViewComponent/>
  </div>
</template>

<script>
import TradingViewComponent from '@/components/TradingViewComponent.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({components: {TradingViewComponent}})
export default class Home extends Vue {
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>

const mutations = {
  UPDATE_CHART_DATA(state: any, val: any) {
    state.chartData = val;
  },
  updaetBG(state: any, val: any) {
    state.bg = val;
  },
  upCoin(state: any, val: any) {
    state.coin = val;
  },
  upTo(state : any, val : any){
      state.to = val;
  }
};

export default mutations;

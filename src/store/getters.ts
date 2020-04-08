const getters = {
    chartData(state:any) {
        return state.chartData
    },
    Bgcolor(state:any){
        return state.bg
    },
    Header(state:any){
        return  state.header
    },
    coin(state:any){
        return state.coin;
    },
    to(state:any){
        return state.to;
    }
    
}

export default getters
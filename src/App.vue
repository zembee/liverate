<template>
  <div id="app">
    <router-view/>
      <!-- <div id="pansymbol"></div> -->
   
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
}

// .left::before {
//     content: "BTC/USD";
//     color: #c5cbce;
//     padding-right: 8px;
//     top: 13px;
//     position: relative;

// }
#pansymbol::before {
    content: "BTC/USD";
    color: #000000;
    padding-right: 8px;
    top: 13px;
    position: relative;

}

</style>

<template>
  <div id="chart_container"></div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { Watch, Component } from "vue-property-decorator";
import store from "../store";

declare const TradingView: any;
declare const $: any;
const LastPrice = 1234.2365;
// const url_api = process.env.VUE_APP_URL;
// const name_api = process.env.VUE_APP_USER;
// const password_api = process.env.VUE_APP_PASSWORD;

// -> dev
const url_api = 'https://api.dev.detrading.co';
const name_api = 'de-trading-dev';
const password_api = "0oMDPnx7HDYmbnTHKGNuFINALDETRADING?xdev_detrading@2019";

// -> prod
// const url_api = "https://api.detrading.co";
// const name_api = "DE-TRADING-PROD";
// const password_api =
//   "aG5iF9To5ft2F06LJtEPY9AxeSFMqKWRjH2XTv1>ilAQUB'NW+EhTHQFINALDETRADING^Wiuz8k*k<CiEy?xPROD_DETRADING@2019";

@Component
export default class TradingViewComponent extends Vue {
  feed: any = null;
  chart: any = null;
  currency1: any;
  currency2: any;
  coin: any;
  fullcount: any = 0;
  to: any;
  header: any = {
    "Accept-language": "TH",
    "Content-Type": "application/json",
    Authorization: "Basic " + btoa(`${name_api}:${password_api}`)
  };
  order: any = 1000;
  bars: any = [
    {
      time: new Date().getTime(),
      close: 0,
      open: 0,
      high: 0,
      low: 0,
      volume: 0
    }
  ];

  offset: any = 0;
  constructor() {
    super();
    store.dispatch("updateChartData", this.bars);

    // this.createData()
  }

  testfunction() {
    let xheader = store.getters.Bgcolor;
    // console.log(xheader);
    // console.log("---testfunction---", this.offset);
  }

  drapi() {
    let datax = store.getters.chartData;
    let url = url_api;
    // console.log("url---------------", url);
    let v = "/api/v1";
    // let link = "/order/trading_view/matcing/min/USD/BTC/1";
    let firstlink =
      "/order/trading_view/matcing/" +
      this.currency2 +
      "/" +
      this.currency1 +
      "/min/1/offset/0/limit/3";

    let link =
      "/order/trading_view/matcing/" +
      this.currency2 +
      "/" +
      this.currency1 +
      "/min/1/offset/0" +
      "/limit/0";
    // console.log(link);
    // /order/trading_view/matcing/USD/BTC/min/1/offset/0/limit/0
    // "/order/trading_view/matcing/min/USD/BTC/1";
    //  console.log(link);
    // console.log("Url--->", url + v + link);
    Vue.axios
      .get(url + v + link, { headers: this.header })
      .then(response => {
        const bars = response.data.res_data;
        this.offset == 0
          ? this.newData(bars["data"])
          : this.upData(bars["data"]);
        this.offset = this.order;
        // this.fullcount == 0 ? (this.fullcount = bars["full_count"]) : null;
        // this.order < this.fullcount ? this.delay() : this.socketconect();

        this.socketconect();
      })
      .catch(c => {});
  }

  delay() {
    setTimeout(() => {
      this.drapi();
      this.order += 1000;
    }, 1500);
  }
  async upData(bars: any) {
    let m = bars;
    let data = store.getters.chartData;
    // let concat = data.concat(bars);
    let xx = m.concat(data);
    // console.log(data);

    await store.dispatch("updateChartData", xx);
    await this.changePair();
  }

  async newData(bars: any) {
    store.dispatch("updateChartData", bars);
    await this.changePair();
  }

  socketconect() {
    // console.log("ok connect");
    const to = this.currency1;
    const coin = this.currency2;
    const { Base64 } = require("js-base64");
    const url = url_api + "/api/v1";
    const username = name_api;
    const password = password_api;
    const basicAuth = Base64.encode(username + ":" + password);
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJzaGExJDg1YzQ5ZjU3JDEkYmI2YzZhZDZlZDM3ZjljM2ZhNTA0MzY1Zjg2N2FkODc3ZjEwZGJmMCIsImxvZ2luX3R5cGUiOiJOT1JNQUwiLCJ0b2tlbl90eXBlIjoiV0VCIiwidG9rZW5fY3JlYXRlX2RhdGUiOiIyMDIwLTAxLTEyIDAzOjMwOjExIiwidGltZXpvbmUiOiIrMDc6MDAiLCJpYXQiOjE1Nzg3NzQ2MTEsImV4cCI6MTU3OTM3OTQxMX0.LGKQQa8pXif8OQSQUdagiHVM3yJcn8Gp3NrdSAic4iQ";
    const language = "EN";
    const configs = {
      transportOptions: {
        polling: {
          extraHeaders: {
            Authorization: `Basic ${basicAuth}`,
            "x-access-token": token,
            "accept-language": language,
            "x-access-coin-aim": `${coin}/${to}`
          }
        }
      }
    };

    const tocoin = `${to}_${coin}`;
    const io = require("socket.io-client");
    const Matching = io.connect(`${url}/orders/matching`, configs);
    const gatewayListenALLItems = `${coin}/${to}/REALTIME`;
    const myOrder = io.connect(`${url}/orders/me`, configs); // order ที่ลงขายหรือซื้อ
    // console.log(gatewayListenALLItems);

    Matching.on(gatewayListenALLItems, (data: any) => {
      //  console.log("xdata--real_time--", data);
      //   console.log(data);
      this.newBlock(data["res_data"]);
    });

    //1585149840000
    //1508313600000
  }

  toTimestamp() {
    var datum = new Date();
    return datum.getTime() / 1000;
  }

  timestart = 1;
  timeend = 1;
  time = 0;
  valume = 0;
  newBlock(data: any) {
    let datax = store.getters.chartData;
    // console.log("x-Data-time", this.time);
    // console.log("x-Data-soket", data);
    let time = this.timestring(data.time);
    if (this.time != time) {
      this.pushData(data, datax, time);
      this.time = time;
      this.valume = 0;
    } else {
      this.updateData(data, datax, time);
    }
  }
  updateData(data: any, bar: any, time: any) {
    let newbar = bar[bar.length - 1];
    if (data.price > newbar.high) {
      newbar.high = data.price;
    }
    if (data.price < newbar.low) {
      newbar.low = data.price;
    }
    newbar.close = data.price;
    newbar.volume += parseFloat(data.valume);
    // console.log("newbar", newbar);
    bar[bar.length - 1] = newbar;
    store.dispatch("updateChartData", bar);
    this.changePair();
  }

  pushData(data: any, bar: any, time: any) {
    bar.push({
      time: time,
      close: data.price,
      open: data.price,
      high: data.price,
      low: data.price,
      volume: parseFloat(data.valume)
    });
    store.dispatch("updateChartData", bar);
    this.changePair();
  }

  timestring(d: string) {
    // var moDate = moment(d+"+07:00",'YYYY-MM-DD HH:mm Z');
    // console.log();
    var date = new Date(d);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    // var seconds = date.getSeconds();

    var timestart = null;
    var timeend = null;
    timestart =
      year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":00";
    timeend =
      year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":00";
    return Date.parse(timestart);
  }

  createData() {
    setInterval(() => {
      let data = store.getters.chartData;
      data.push({
        time: new Date().getTime(),
        close: 40 + Math.random() * 5,
        open: 40 + Math.random() * 5,
        high: 40 + Math.random() * 5,
        low: 40 + Math.random() * 5,
        volume: 100000 * Math.random()
      });
      store.dispatch("updateChartData", data);
      this.changePair();
      // console.log("bradata", data);
    }, 1000);
    // console.log("bradata",data);
  }

  changePair() {
    if (this.chart && this.feed) {
      this.feed._fireEvent("pair_change");
      this.chart.activeChart().resetData();
      this.chart
        .activeChart()
        .setSymbol(this.currency1 + ":" + this.currency2, () => {});
    }
  }
  getQuery() {
    console.log("dev -> 0.004");
    // this.currency2 = await this.$route.query.coin;
    // this.currency1 = await this.$route.query.to;

    // console.log('The id xxxx: ' + this.$route.params.coin);
    //  console.log('The id ppppppp: ' + this.$route.params.price);

    if (this.$route.params.coin == "BTC") {
      this.currency1 = this.$route.params.coin;
      this.currency2 = this.$route.params.price;
    } else {
      this.currency2 = this.$route.params.coin;
      this.currency1 = this.$route.params.price;
    }

    this.drapi();
  }

  mounted() {
    this.getQuery();
    // this.getapi();
    this.feed = this.createFeed();

    TradingView.onready((configurationData: any) => {
      this.chart = new TradingView.widget({
        fullscreen: true,
        autosize: true,
        symbol: this.currency1 + ":" + this.currency2,
        container_id: "chart_container",
        datafeed: this.feed,
        library_path: "/custom_scripts/chart_main/",
        locale: "en",
        timezone: "Asia/Bangkok", //todo: ustawianie timezone'a po strefie usera
        charts_storage_api_version: "1.2",
        client_id: "tradingview.com",
        user_id: "public_user_id",
        debug: true,
        //  loading_screen:{ backgroundColor: "#00ff00",foregroundColor: "#000000", }, //todo:do it
        interval: "15",
        // timeframe:'',//todo: na koncu
        toolbar_bg: store.getters.Bgcolor,
        // saved_data: this.savedData,
        allow_symbol_change: true,
        time_frames: [
          { text: "1y", resolution: "1W" },
          { text: "6m", resolution: "3D" },
          { text: "3m", resolution: "1D" },
          { text: "1m", resolution: "1D" },
          { text: "1w", resolution: "30" },
          { text: "3d", resolution: "30" },
          { text: "1d", resolution: "30" },
          { text: "6h", resolution: "15" },
          { text: "1h", resolution: "1" }
        ],
        drawings_access: {
          type: "black",
          tools: [{ name: "Regression Trend" }] //todo: moje
          //   tools: [
          //     { name: "Trend Line", grayed: true },
          //     { name: "Trend Angle", grayed: true }
          //   ] //todo: bb
        },
        disabled_features: [
          "header_symbol_search",
          "header_interval_dialog_button",
          "show_interval_dialog_on_key_press",
          "symbol_search_hot_key",

          "display_market_status",
          "header_compare",
          "edit_buttons_in_legend",

          "border_around_the_chart",
          "main_series_scale_menu",
          "star_some_intervals_by_default",
          "datasource_copypaste",
          "right_bar_stays_on_scroll",
          "context_menus",
          "remove_library_container_border"
        ],
        enabled_features: [
          "dont_show_boolean_study_arguments",
          "use_localstorage_for_settings",
          "remove_library_container_border",
          "save_chart_properties_to_local_storage",
          "side_toolbar_in_fullscreen_mode",
          "hide_last_na_study_output",
          "constraint_dialogs_movement", //todo: nie do końca jestem pewien

          "go_to_date",
          "compare_symbol",
          "border_around_the_chart",
          "timezone_menu",
          "header_resolutions", //todo: przetestowac
          "control_bar", //todo: przetestowac
          "edit_buttons_in_legend", //todo: przetestowac

          "study_dialog_search_control",

          "symbol_info"
        ],
        studies_overrides: {
          "volume.volume.color.0": "#fe4761",
          "volume.volume.color.1": "#3fcfb4",
          "volume.volume.transparency": 75
        },
        overrides: {
          "symbolWatermarkProperties.color": "rgba(0,0,0, 0)",
          "paneProperties.background": store.getters.Bgcolor,
          "paneProperties.vertGridProperties.color": "#f7f7f700",
          "paneProperties.horzGridProperties.color": "#f7f7f700",
          "paneProperties.crossHairProperties.color": "#58637a",
          "paneProperties.crossHairProperties.style": 1,
          "mainSeriesProperties.style": 1,
          "mainSeriesProperties.showCountdown": false,
          "scalesProperties.showSeriesLastValue": true,
          "mainSeriesProperties.visible": false,
          "mainSeriesProperties.showPriceLine": true,
          "mainSeriesProperties.priceLineWidth": 1,
          "mainSeriesProperties.lockScalapie": false,
          "mainSeriesProperties.minTick": "default",
          "mainSeriesProperties.extendedHours": false,
          volumePaneSize: "tiny",
          editorFontsList: [
            "Lato",
            "Arial",
            "Verdana",
            "Courier New",
            "Times New Roman"
          ],
          "paneProperties.topMargin": 5,
          "paneProperties.bottomMargin": 5,
          "paneProperties.leftAxisProperties.autoScale": true,
          "paneProperties.leftAxisProperties.autoScaleDisabled": false,
          "paneProperties.leftAxisProperties.percentage": false,
          "paneProperties.leftAxisProperties.percentageDisabled": false,
          "paneProperties.leftAxisProperties.log": false,
          "paneProperties.leftAxisProperties.logDisabled": false,
          "paneProperties.leftAxisProperties.alignLabels": true,
          "paneProperties.legendProperties.showStudyArguments": true,
          "paneProperties.legendProperties.showStudyTitles": true,
          "paneProperties.legendProperties.showStudyValues": true,
          "paneProperties.legendProperties.showSeriesTitle": true,
          "paneProperties.legendProperties.showSeriesOHLC": true,
          "scalesProperties.showLeftScale": false,
          "scalesProperties.showRightScale": true,
          "scalesProperties.backgroundColor": store.getters.Bgcolor,
          "scalesProperties.lineColor": store.getters.Bgcolor,
          "scalesProperties.textColor": "#8f98ad",
          "scalesProperties.scaleSeriesOnly": false,
          "mainSeriesProperties.priceAxisProperties.autoScale": true,
          "mainSeriesProperties.priceAxisProperties.autoScaleDisabled": false,
          "mainSeriesProperties.priceAxisProperties.percentage": false,
          "mainSeriesProperties.priceAxisProperties.percentageDisabled": false,
          "mainSeriesProperties.priceAxisProperties.log": false,
          "mainSeriesProperties.priceAxisProperties.logDisabled": false,
          "mainSeriesProperties.candleStyle.upColor": "#3fcfb4",
          "mainSeriesProperties.candleStyle.downColor": "#fe4761",
          "mainSeriesProperties.candleStyle.drawWick": true,
          "mainSeriesProperties.candleStyle.drawBorder": true,
          "mainSeriesProperties.candleStyle.borderColor": "#3fcfb4",
          "mainSeriesProperties.candleStyle.borderUpColor": "#3fcfb4",
          "mainSeriesProperties.candleStyle.borderDownColor": "#fe4761",
          "mainSeriesProperties.candleStyle.wickColor": "#737375",
          "mainSeriesProperties.candleStyle.wickUpColor": "#3fcfb4",
          "mainSeriesProperties.candleStyle.wickDownColor": "#fe4761",
          "mainSeriesProperties.candleStyle.barColorsOnPrevClose": false,
          "mainSeriesProperties.hollowCandleStyle.upColor": "#3fcfb4",
          "mainSeriesProperties.hollowCandleStyle.downColor": "#fe4761",
          "mainSeriesProperties.hollowCandleStyle.drawWick": true,
          "mainSeriesProperties.hollowCandleStyle.drawBorder": true,
          "mainSeriesProperties.hollowCandleStyle.borderColor": "#3fcfb4",
          "mainSeriesProperties.hollowCandleStyle.borderUpColor": "#3fcfb4",
          "mainSeriesProperties.hollowCandleStyle.borderDownColor": "#fe4761",
          "mainSeriesProperties.hollowCandleStyle.wickColor": "#737375",
          "mainSeriesProperties.hollowCandleStyle.wickUpColor": "#3fcfb4",
          "mainSeriesProperties.hollowCandleStyle.wickDownColor": "#fe4761",
          "mainSeriesProperties.haStyle.upColor": "#3fcfb4",
          "mainSeriesProperties.haStyle.downColor": "#fe4761",
          "mainSeriesProperties.haStyle.drawWick": true,
          "mainSeriesProperties.haStyle.drawBorder": true,
          "mainSeriesProperties.haStyle.borderColor": "#3fcfb4",
          "mainSeriesProperties.haStyle.borderUpColor": "#3fcfb4",
          "mainSeriesProperties.haStyle.borderDownColor": "#fe4761",
          "mainSeriesProperties.haStyle.wickColor": "#737375",
          "mainSeriesProperties.haStyle.wickUpColor": "#3fcfb4",
          "mainSeriesProperties.haStyle.wickDownColor": "#fe4761",
          "mainSeriesProperties.haStyle.barColorsOnPrevClose": false,
          "mainSeriesProperties.barStyle.upColor": "#3fcfb4",
          "mainSeriesProperties.barStyle.downColor": "#fe4761",
          "mainSeriesProperties.barStyle.barColorsOnPrevClose": false,
          "mainSeriesProperties.barStyle.dontDrawOpen": false,
          "mainSeriesProperties.lineStyle.color": "#0cbef3",
          "mainSeriesProperties.lineStyle.linestyle": 0,
          "mainSeriesProperties.lineStyle.linewidth": 1,
          "mainSeriesProperties.lineStyle.priceSource": "close",
          "mainSeriesProperties.areaStyle.color1": "#0cbef3",
          "mainSeriesProperties.areaStyle.color2": "#0098c4",
          "mainSeriesProperties.areaStyle.linecolor": "#0cbef3",
          "mainSeriesProperties.areaStyle.linestyle": 0,
          "mainSeriesProperties.areaStyle.linewidth": 1,
          "mainSeriesProperties.areaStyle.priceSource": "close",
          "mainSeriesProperties.areaStyle.transparency": 80
        },
        custom_css_url: "chart.css"
      });
    });
  }

  createFeed() {
    let Datafeed: any = {};

    Datafeed.DataPulseUpdater = function(datafeed: any, updateFrequency: any) {
      this._datafeed = datafeed;
      this._subscribers = {};

      this._requestsPending = 0;
      var that = this;

      var update = function() {
        // console.log("update");
        if (that._requestsPending > 0) {
          return;
        }

        for (var listenerGUID in that._subscribers) {
          var subscriptionRecord = that._subscribers[listenerGUID];
          var resolution = subscriptionRecord.resolution;

          var datesRangeRight = parseInt(
            (new Date().valueOf() / 1000).toFixed()
          );

          //	BEWARE: please note we really need 2 bars, not the only last one
          //	see the explanation below. `10` is the `large enough` value to work around holidays
          var datesRangeLeft =
            datesRangeRight - that.periodLengthSeconds(resolution, 10);

          that._requestsPending++;

          (function(_subscriptionRecord) {
            // eslint-disable-line
            that._datafeed.getBars(
              _subscriptionRecord.symbolInfo,
              resolution,
              datesRangeLeft,
              datesRangeRight,
              function(bars: any) {
                that._requestsPending--;

                //	means the subscription was cancelled while waiting for data
                if (!that._subscribers.hasOwnProperty(listenerGUID)) {
                  return;
                }

                if (bars.length === 0) {
                  return;
                }

                var lastBar = bars[bars.length - 1];
                if (
                  !isNaN(_subscriptionRecord.lastBarTime) &&
                  lastBar.time < _subscriptionRecord.lastBarTime
                ) {
                  return;
                }

                var subscribers = _subscriptionRecord.listeners;

                //	BEWARE: this one isn't working when first update comes and this update makes a new bar. In this case
                //	_subscriptionRecord.lastBarTime = NaN
                var isNewBar =
                  !isNaN(_subscriptionRecord.lastBarTime) &&
                  lastBar.time > _subscriptionRecord.lastBarTime;

                //	Pulse updating may miss some trades data (ie, if pulse period = 10 secods and new bar is started 5 seconds later after the last update, the
                //	old bar's last 5 seconds trades will be lost). Thus, at fist we should broadcast old bar updates when it's ready.
                if (isNewBar) {
                  if (bars.length < 2) {
                    throw new Error(
                      "Not enough bars in history for proper pulse update. Need at least 2."
                    );
                  }

                  var previousBar = bars[bars.length - 2];
                  for (var i = 0; i < subscribers.length; ++i) {
                    subscribers[i](previousBar);
                  }
                }

                _subscriptionRecord.lastBarTime = lastBar.time;

                for (var j = 0; j < subscribers.length; ++j) {
                  subscribers[j](lastBar);
                }
              },

              //	on error
              function() {
                that._requestsPending--;
              }
            );
          })(subscriptionRecord);
        }
      };

      if (typeof updateFrequency != "undefined" && updateFrequency > 0) {
        setInterval(update, updateFrequency);
      }
    };

    Datafeed.DataPulseUpdater.prototype.periodLengthSeconds = function(
      resolution: any,
      requiredPeriodsCount: any
    ) {
      var daysCount = 0;

      if (resolution === "D") {
        daysCount = requiredPeriodsCount;
      } else if (resolution === "M") {
        daysCount = 31 * requiredPeriodsCount;
      } else if (resolution === "W") {
        daysCount = 7 * requiredPeriodsCount;
      } else {
        daysCount = (requiredPeriodsCount * resolution) / (24 * 60);
      }

      return daysCount * 24 * 60 * 60;
    };

    Datafeed.DataPulseUpdater.prototype.subscribeDataListener = function(
      symbolInfo: any,
      resolution: any,
      newDataCallback: any,
      listenerGUID: any
    ) {
      this._datafeed._logMessage("Subscribing " + listenerGUID);

      if (!this._subscribers.hasOwnProperty(listenerGUID)) {
        this._subscribers[listenerGUID] = {
          symbolInfo: symbolInfo,
          resolution: resolution,
          lastBarTime: NaN,
          listeners: []
        };
      }

      this._subscribers[listenerGUID].listeners.push(newDataCallback);
    };

    Datafeed.DataPulseUpdater.prototype.unsubscribeDataListener = function(
      listenerGUID: any
    ) {
      this._datafeed._logMessage("Unsubscribing " + listenerGUID);
      delete this._subscribers[listenerGUID];
    };

    Datafeed.Container = function(updateFrequency: any) {
      this._configuration = {
        supports_search: false,
        supports_group_request: false,
        supported_resolutions: [
          "1",
          "3",
          "5",
          "15",
          "30",
          "60",
          "120",
          "240",
          "360",
          "720",
          "1440"
          // "1D"
          //  "3D",
          // "1W",
          // "1M"
        ],
        supports_marks: true,
        supports_timescale_marks: true,
        exchanges: ["myExchange"]
      };

      this._barsPulseUpdater = new Datafeed.DataPulseUpdater(
        this,
        updateFrequency || 10 * 1000
      );
      // this._quotesPulseUpdater = new Datafeed.QuotesPulseUpdater(this);

      this._enableLogging = true;
      this._callbacks = {};

      this._initializationFinished = true;
      this._fireEvent("initialized");
      this._fireEvent("configuration_ready");
    };

    Datafeed.Container.prototype._fireEvent = function(
      event: any,
      argument: any
    ) {
      if (this._callbacks.hasOwnProperty(event)) {
        var callbacksChain = this._callbacks[event];
        for (var i = 0; i < callbacksChain.length; ++i) {
          callbacksChain[i](argument);
        }

        this._callbacks[event] = [];
      }
    };

    Datafeed.Container.prototype._logMessage = function(message: any) {
      if (this._enableLogging) {
        var now = new Date();
      }
    };

    Datafeed.Container.prototype.on = function(event: any, callback: any) {
      if (!this._callbacks.hasOwnProperty(event)) {
        this._callbacks[event] = [];
      }

      this._callbacks[event].push(callback);
      return this;
    };

    Datafeed.Container.prototype.onReady = function(callback: any) {
      let that = this;
      if (this._configuration) {
        setTimeout(function() {
          callback(that._configuration);
        }, 0);
      } else {
        this.on("configuration_ready", function() {
          callback(that._configuration);
        });
      }
    };

    Datafeed.Container.prototype.resolveSymbol = function(
      symbolName: any,
      onSymbolResolvedCallback: any,
      onResolveErrorCallback: any,
      onGrayedObjectClicked: any
    ) {
      this._logMessage("GOWNO :: resolve symbol " + symbolName);
      Promise.resolve().then(() => {
        this._logMessage(
          "GOWNO :: onResultReady inject " +
            this.currency1 +
            ":" +
            this.currency2
        );

        onSymbolResolvedCallback({
          name: this.currency1 + ":" + this.currency2,
          timezone: "Asia/Bangkok",
          pricescale: LastPrice > 1000 ? 100 : 100000000,
          minmov: 1,
          minmov2: 0,
          ticker: this.currency1 + ":" + this.currency2,
          description: "",
          session: "24x7",
          type: "bitcoin",
          "exchange-traded": "myExchange",
          "exchange-listed": "myExchange",
          has_intraday: true,
          intraday_multipliers: ["1"], //It is an array containing intraday resolutions (in minutes) the datafeed wants to build by itself. E.g., if the datafeed reported he supports resolutions ["1", "5", "15"], but in fact it has only 1 minute bars for symbol X, it should set intraday_multipliers of X = [1]. This will make Charting Library to build 5 and 15 resolutions by itself.
          has_weekly_and_monthly: false,
          has_no_volume: false,
          regular_session: "24x7"
        });
      });
    };

    Datafeed.Container.prototype.getBars = function(
      symbolInfo: any,
      resolution: any,
      rangeStartDate: any,
      rangeEndDate: any,
      onDataCallback: any,
      onErrorCallback: any
    ) {
      if (rangeStartDate > 0 && (rangeStartDate + "").length > 10) {
        throw new Error();
      }
      onDataCallback([], { noData: true });

      //onDataCallback(bars, { noData: true , nextTime: data.nb || data.nextTime });
    };

    Datafeed.Container.prototype.subscribeBars = function(
      symbolInfo: any,
      resolution: any,
      onRealtimeCallback: any,
      listenerGUID: any,
      onResetCacheNeededCallback: any
    ) {
      store.getters.chartData.forEach(function(bar: any) {
        // in subscribeBars

        onRealtimeCallback(bar);
      });
      this.on("pair_change", function() {
        onResetCacheNeededCallback();
      });
      //this._barsPulseUpdater.subscribeDataListener(symbolInfo, resolution, onRealtimeCallback, listenerGUID, onResetCacheNeededCallback);
    };

    Datafeed.Container.prototype.unsubscribeBars = function(listenerGUID: any) {
      this._barsPulseUpdater.unsubscribeDataListener(listenerGUID);
    };

    return new Datafeed.Container();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
#chart_container {
  height: calc(100vh);
}
</style>

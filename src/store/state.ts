const url_api = process.env.VUE_APP_URL
const name_api = process.env.VUE_APP_USER
const password_api = process.env.VUE_APP_PASSWORD


// const url_api = 'https://api.detrading.co';
// const name_api = 'DE-TRADING-PROD';
// const password_api = "aG5iF9To5ft2F06LJtEPY9AxeSFMqKWRjH2XTv1>ilAQUB'NW+EhTHQ^Wiuz8k*k<CiEy?xPROD_DETRADING@2019";

const state = {
  chartData: null,
  bg: '#313337',
  header: {
    "Accept-language": "TH",
    "Content-Type": "application/json",
    Authorization:
      "Basic " +
      btoa(`${name_api}:${password_api}`
      )
  },
  coin : '',
  to : ''
}

export default state
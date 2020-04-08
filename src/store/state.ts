const url_api = process.env.VUE_APP_URL
const name_api = process.env.VUE_APP_USER
const password_api = process.env.VUE_APP_PASSWORD
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
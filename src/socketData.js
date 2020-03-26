
const { Base64 } = require('js-base64')
    // const url = 'http://localhost:5119/api/v1'
const url = 'https://api.detrading.co/api/v1'

// const username = 'de-trading-dev'
const username = 'DE-TRADING-PROD'
    // const password = '0oMDPnx7HDYmbnTHKGNu?xdev_detrading@2019'
const password = "aG5iF9To5ft2F06LJtEPY9AxeSFMqKWRjH2XTv1>ilAQUB'NW+EhTHQ^Wiuz8k*k<CiEy?xPROD_DETRADING@2019"
const basicAuth = Base64.encode(username + ':' + password)
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJzaGExJDAxMWQ0MWI5JDEkMzdjMGYyZjQ2MzgyYzM1YWZhYzFkMTNiZDczM2UwMWZiMDcwZGRhNyIsImxvZ2luX3R5cGUiOiJOT1JNQUwiLCJ0b2tlbl90eXBlIjoiV0VCIiwidG9rZW5fY3JlYXRlX2RhdGUiOiIyMDIwLTAxLTEwIDEyOjU3OjA5IiwidGltZXpvbmUiOiIrMDc6MDAiLCJpYXQiOjE1Nzg2MzU4MjksImV4cCI6MTU4MTIyNzgyOX0.T3Q4HdW5xRTohlw_x2z9ShO60G51jrzXw4iyM9vlqqw'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJzaGExJDg1YzQ5ZjU3JDEkYmI2YzZhZDZlZDM3ZjljM2ZhNTA0MzY1Zjg2N2FkODc3ZjEwZGJmMCIsImxvZ2luX3R5cGUiOiJOT1JNQUwiLCJ0b2tlbl90eXBlIjoiV0VCIiwidG9rZW5fY3JlYXRlX2RhdGUiOiIyMDIwLTAxLTEyIDAzOjMwOjExIiwidGltZXpvbmUiOiIrMDc6MDAiLCJpYXQiOjE1Nzg3NzQ2MTEsImV4cCI6MTU3OTM3OTQxMX0.LGKQQa8pXif8OQSQUdagiHVM3yJcn8Gp3NrdSAic4iQ'
const language = 'EN'
const configs = {
    transportOptions: {
        polling: {
            extraHeaders: {
                'Authorization': `Basic ${basicAuth}`,
                 'x-access-token': token,
                'accept-language': language
            }
        }
    }
}

export default {
    configs,url,
  };
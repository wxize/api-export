
// 
const Api = require('../out_files/微信端系统通知管理/ApiManager')

const axios = require('axios')

const service = axios.create({
    baseUrl: 'https://syncwe.com',
    timeout: 5000
})

const api = new Api(service)

// 
api.getApiInformationCertification({})
.then(data => console.log(data.data))
.catch(err => console.log(err))

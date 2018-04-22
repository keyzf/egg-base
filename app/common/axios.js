const axios = require('axios')

axios.interceptors.response.use(
  res => {
    return res
  },
  res => {
    const { response } = res
    const errorMsg = _.get(response, 'data.errorMsg') || _.get(response, 'data')
    logger.error(errorMsg)

    return Promise.reject(res)
  }
)

module.exports = axios

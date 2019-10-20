import {ORG_ID, TOKEN} from "../config";

const axios = require('axios')
axios.defaults.headers.common['organizationid'] = ORG_ID
axios.defaults.headers.common['token'] = TOKEN

class BaseService {
  async makeRequest(path, options = {}) {
    options = {
      uri: path,
      method: 'GET',
      ...options
    }

    const res = await axios({
      method: options.method,
      url: options.uri,
      data: options.body
    })
    return res
  }
}

module.exports = BaseService
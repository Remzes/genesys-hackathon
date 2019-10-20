const BaseService = require('./base.service')
import {documentType, languageCode, pageNumber, pageSize, FAQ_SEARCH_ROUTE, sortBy, sortOrder} from "../config";

class FAQService extends BaseService {

  async search(query) {
    return await this.makeRequest(FAQ_SEARCH_ROUTE, {
      method: 'POST',
      body: {
        "query": query,
        "pageSize": pageSize,
        "pageNumber": pageNumber,
        "sortOrder": sortOrder,
        "sortBy": sortBy,
        "languageCode": languageCode,
        "documentType": documentType
      }
    })
  }


}

module.exports = new FAQService()
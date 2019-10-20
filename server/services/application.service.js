const BaseService = require('./base.service')
import {documentType, languageCode, pageNumber, pageSize, AW_SEARCH_ROUTE, sortBy, sortOrder} from "../config";

class ApplicationService extends BaseService {

  async search(query) {
    console.log(AW_SEARCH_ROUTE)
    return await this.makeRequest(AW_SEARCH_ROUTE, {
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

module.exports = new ApplicationService()
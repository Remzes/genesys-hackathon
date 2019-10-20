const BaseService = require('./base.service')
import {documentType, languageCode, pageNumber, pageSize, WWA_SEARCH_ROUTE, WWA_TRAIN_ROUTE, sortBy, sortOrder} from "../config";

class WelcomeService extends BaseService {

  async search(query) {
    return await this.makeRequest(WWA_SEARCH_ROUTE, {
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

  async train(question, answer) {
    return await this.makeRequest(WWA_TRAIN_ROUTE, {
      method: 'POST',
      body: {
        "type": "faq",
        "faq": {
          "question": question,
          "answer": answer,
          "alternatives": []
        },
        "categories": [],
      }
    })
  }
}

module.exports = new WelcomeService()
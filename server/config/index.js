export const TOKEN = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmdJZCI6IjNkYTA2OTQyLWUwNzgtNDFhMy05NmY4LWE0Mjg0NzUzMTI5MyIsImV4cCI6MTU3MTU4NDIyNSwiaWF0IjoxNTcxNTgwNjI1fQ.YA0ebFlfh0RvM8_4aUBmpCqNGxJoobIkQkX07-_f4W8`
export const ENDPOINT = `https://api.genesysappliedresearch.com/v2/knowledge`
export const LANGUAGE_CODE = `en-US`

export const WWA_KD_ID = `180eed9c-ae42-45d2-a689-922a631b3922`
export const FAQ_KD_ID = `05773f03-ee30-4d33-8d59-fc30d670cf28`
export const AW_KD_ID = `a67266e5-b4bc-4dcf-8f43-7fdcaec97654`

export const ORG_ID = `3da06942-e078-41a3-96f8-a42847531293`

export const WWA_SEARCH_ROUTE = `${ENDPOINT}/knowledgebases/${WWA_KD_ID}/search`
export const WWA_TRAIN_ROUTE = `${ENDPOINT}/knowledgebases/${WWA_KD_ID}/languages/${LANGUAGE_CODE}/documents`

export const FAQ_SEARCH_ROUTE = `${ENDPOINT}/knowledgebases/${FAQ_KD_ID}/search`

export const AW_SEARCH_ROUTE = `${ENDPOINT}/knowledgebases/${AW_KD_ID}/search`

export const pageSize = 5
export const pageNumber =  1
export const sortOrder = "string"
export const sortBy = "string"
export const languageCode = LANGUAGE_CODE
export const documentType =  "Faq"
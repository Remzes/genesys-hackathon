import _ from 'lodash'
import ApplicationService from "../../services/application.service";

export const searchQuery = async (req, res) => {
  const response = await ApplicationService.search(req.body.message)
  const results = _.sortBy(response.data.results.filter(r => r.confidence > 0.5), [o => o.confidence])
  const best = results[0] && results[0].faq.answer
  const answer = best
    ? { success: true, message: best }
    : { success: false, message: "We are trying to figure out the answer. Please, stay tuned" }
  await res.json(answer)
}
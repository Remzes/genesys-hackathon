import { combineReducers } from "redux"
import ww from '../ducks/welcomeWidget'
import faq from '../ducks/faqWidget'
import aw from '../ducks/applicationWidget'
import unsolved from '../ducks/unsolved'

const rootReducer = combineReducers({ ww, aw, faq, unsolved })
export default rootReducer;
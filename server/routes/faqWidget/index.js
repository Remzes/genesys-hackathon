const router = require('express').Router()
import {searchQuery} from "../../controllers/faqWidget"

router.post('/search', searchQuery);

module.exports = router

const router = require('express').Router()
import {searchQuery, trainQuery} from "../../controllers/welcomeWidget"

router.post('/search', searchQuery);
router.post('/train', trainQuery)

module.exports = router

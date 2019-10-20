const router = require('express').Router()
import {searchQuery} from "../../controllers/applicationWidget"

router.post('/search', searchQuery);

module.exports = router

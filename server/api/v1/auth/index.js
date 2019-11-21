const router = require('express').Router()

router.use("/login", require('./login'))
router.use("/join", require('./join'))

module.exports = router;
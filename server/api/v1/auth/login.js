const router = require('express').Router()

router.post("/", (req, res) => {
    res.send({
        message: "success"
    })
})

module.exports = router
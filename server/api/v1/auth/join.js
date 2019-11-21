const router = require('express').Router()
const UserModel = require("../../../src/models/user")

router.post("/", async (req, res) => {
    const { username, email, password } = req.body
    UserModel.create({
        username,
        email,
        password
    }).then((user) => {
        res.status(200).send(user)
    }).catch(console.log)
})

module.exports = router
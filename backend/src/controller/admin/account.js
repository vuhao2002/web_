const Acount = require('../../models/Account')
const bcrypt = require('bcrypt')

function test() {
    console.log("this is a test")
}

module.exports = {

    // [GET] /admin/acount => 1 role ...
    getAcounts: async (req, res) => {
        const role = req.role
        const productlines = await Acount.find({ role }).select('name_acount').lean()

        return res.status(200).json({ message: 'Created Success', productlines })
    },

    // [POST] /admin/acount/create
    createAcount: async (req, res) => {
        const { role, username, password } = req.body

        const acount = await Acount.findOne({ username }).lean()
        if (acount) {
            res.status(400).json({ message: 'Acount is exist' })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newAcount = new Acount({
            role, username,
            password: hashedPassword
        })

        await newAcount.save()

        res.status(201).json({ message: 'Create Acount Success' })
    },

    // [Delete] /admin/acount/:id
    deleteAcount: async (req, res) => {
        const _id = req.params.id

        const acount = await Acount.findOne({ _id })
        if (acount) {
            res.status(400).json({ message: 'Acount is not exist' })
        }

        await acount.deleteOne({ _id })

        res.status(201).json({ message: 'Create Acount Success' })
    }

}
const Account = require('../../models/Account')
const bcrypt = require('bcrypt')

function test() {
    console.log("this is a test")
}

module.exports = {

    // [GET] /admin/account => 1 role ...
    getAccounts: async (req, res) => {
        const accounts = await Account.find({}).lean()

        return res.status(200).json({ success: true, message: 'Get Success', accounts })
    },

    // [POST] /admin/account/create
    createAccount: async (req, res) => {
        try {
            const { role = '', username = '', password = '' } = req.body

            const account = await Account.findOne({ username }).lean()

            if (account) {
                return res.status(400).json({ message: 'Account is exist' })
            }

            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)

            const newAccount = new Account({
                role, username,
                password: hashedPassword
            })

            await newAccount.save()

            res.status(201).json({ success: true, message: 'Create Account Success', account: newAccount })
        } catch (error) {
            res.status(500).json({ success: false, message: 'Internal Error', error })
        }


    },

    // [Delete] /admin/account/:id
    deleteAccount: async (req, res) => {~
        const _id = req.params.id

        const account = await Account.findOne({ _id })
        if (account) {
            res.status(400).json({ message: 'Account is not exist' })
        }

        await account.deleteOne({ _id })

        res.status(201).json({ message: 'Create Account Success' })
    }

}
const handleStatus = require('../../helpers/handleStatus');
const ProductLine = require('../../models/ProductLine')

module.exports = {

    // [GET] /admin/productlines
    getProductLines: async (req, res) => {
        const productlines = await ProductLine.find({}).lean()

        return res.status(200).json({ message: 'Created Success', productlines })
    },

    // [POST] /admin/productlines
    createProductLine: async (req, res) => {
        const { code, name } = req.body;
        const productline = new ProductLine({
            code, name
        })

        await productline.save()

        return res.status(200).json({ message: 'Created Success' })
    },

    // [PUT] /admin/productlines/:id
    editProductLine: async (req, res) => {
        const _id = req.params.id
        const { code, name } = req.body

        const productline = new ProductLine.find({ _id })

        if (!productline) {
            res.status(400).json({ message: 'Productline is not exist' })
        }

        await productline.updateOne({ _id }, { code, name })

        res.status(200).json({ message: 'Update Success' })

    },

    // [PUT] /admin/productlines/:id
    deleteProductLine: async (req, res) => {
        const _id = req.params.id

        const productline = new ProductLine.find({ _id })

        if (!productline) {
            res.status(400).json({ message: 'Productline is not exist' })
        }

        await productline.deleteOne({ _id })

        res.status(200).json({ message: 'Delete Success' })

    }

}

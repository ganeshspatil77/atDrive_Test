const Product = require('../modal/product.modal');

const getAllProduct = async (req, res) => {

    const products = await Product.find();
    res.json(products)
};

const getProductById = async (req, res) => {

    const productById = await Product.findById(req.params.id)
    res.json(productById)

};
const createProduct = async (req, res) => {

    const createProduct = await Product.create(req.body)
    res.json(createProduct)

};
const updateProduct = async (req, res) => {

    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated)
};

const deleteProduct = async (req, res) => {

    const deleteProduct = await Product.findByIdAndDelete(req.params.id)
    res.json({ deleteProduct, message: 'Delete Successfully.' })
};

module.exports = {
    getAllProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct

}
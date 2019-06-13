const mongoose = require("mongoose");
const Product = mongoose.model("Product");

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page, limit: 10 });
        return res.send(products);
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.send(product);
    },

    async store(req, res) {
        const product = await Product.create(req.body);

        return res.send(product);
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        return res.send(product);
    },
    async destroy(req, res) {
        await Product.findOneAndRemove(req.params.id);

        return res.send();
    },
    async root(req, res) {
        return res.sendFile('/views/index.html',{root: "./src"});
    }
};

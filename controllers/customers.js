// responsável pelas regras de negócio
// é responsabilidade dos controllers de tratar a query executada no dao
// uma forma de fazer: exports.createOne = (req, res) => res.send("http post");

const Customer = require("./dao/customer");

module.exports = {
    createOne: (req, res) => {
        Customer.create(req.body, (err) => { 
            if (!err) {
                res.status(201).send({})
    } else {
        console.log(res)
        res.status(400).send({ err })
        }
    });   
    },

    getAll: (req, res) => {
        Customer.findAll((err, data) => res.send(data));
    },

    getOne: (req, res) => {
        Customer.findOne(req.params, (err, data) => {
        if (data) {
            res.status(200).send(data);
        } else {
            res.status(404).send({ err })
        } 
    });   
    },

    changeOne: (req, res) => {
        Customer.updatePartial(req.params.id, req.body, (err) => {
            if (!err) {
                res.status(204).end()
            } else {
                res.status(400).send({ err })
            } 
        });
    },

    removeOne: (req, res) => {
         Customer.delete(req.params, (err) => {
        if (!err) {
            res.status(204).end()
        }
    });   
    },
};


const Vehicle = require("./dao/vehicle");

module.exports = {
    createOne: (req, res) => {
        Vehicle.create(req.body, (err) => { 
            if (!err) {
                res.status(201).send({})
    } else {
        res.status(400).send({ err })
        }
    });   
    },

    getAll: (req, res) => {
        Vehicle.findAll((err, data) => res.send(data));
    },

    getOneId: (req, res) => {
        Vehicle.findOneId(req.params, (err, data) => {
        if (data) {
            res.status(200).send(data);
        } else {
            res.status(404).send({ err })
        } 
    });   
    },

    getAllName: (req, res) => {
       
        Vehicle.findAllName(req.params, (err, data) => {
        if (data) {
            res.status(200).send(data);
        } else {
            res.status(404).send({ err })
        } 
    });   
    },

    changeOne: (req, res) => {
        Vehicle.updatePartial(req.params.id, req.body, (err) => {
            if (!err) {
                res.status(204).end()
            } else {
                res.status(400).send({ err })
            } 
        });
    },

    removeOne: (req, res) => {
         Vehicle.delete(req.params, (err) => {
        if (!err) {
            res.status(204).end()
        }
    });   
    },
};


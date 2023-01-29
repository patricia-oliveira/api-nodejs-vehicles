const conn = require("../../infra/connection");
const { ulid } = require("ulid");

class Vehicle{
    create (data, callback) {
        const {name, license_plate, year} = data;
        const sql = `INSERT INTO vehicles 
                    (id, name, license_plate, year) 
                    VALUES 
                    ('${ulid()}', '${name}', '${license_plate}', '${year}');`;
        conn.run(sql, callback);
    }

    findAll (callback) {
    const sql = 'SELECT * FROM vehicles;';
    conn.all(sql, callback)
    }

    findOneId (data, callback) {
        const sql = `SELECT * FROM vehicles WHERE id = '${data.id}';`;
        conn.get(sql, callback)
    }

    findAllName (data, callback) {
        const sql = `SELECT * FROM vehicles WHERE name = '${data.name}';`;
        conn.all(sql, callback)
    }

    updatePartial (id, data, callback) {
        let VehicleData = Object.entries(data);
        let fields = []
        for (let i = 0; i < VehicleData.length; i++) {
            fields.push(`'${VehicleData[i][0]}' = '${VehicleData[i][1]}'`);
        }
        const sql = `UPDATE vehicles 
                    SET ${fields.join(",")}
                    WHERE id = '${id}';`;
        conn.run(sql, callback);
        
    }

    delete (data, callback) {
        const sql = `DELETE FROM vehicles WHERE id = '${data.id}';`;
        conn.run(sql, callback)
    }
}

// instanciando um objeto para ser exportado e criar um novo objeto
module.exports = new Vehicle();
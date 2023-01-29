const conn = require("../../infra/connection");
const { ulid } = require("ulid");

// no singular, pois tenho a representação de um único cliente
// classe que organiza todos os comportamentos relacionados a trabalhar com o banco de dados
//responsabilidade: construir o SQL e executar a query
// tratamento da resposta deve ficar no controller

class Customer {
    create (data, callback) {
        const {name, email, birthday, cpf, typeAccount} = data;
        const sql = `INSERT INTO customers 
                    (id, name, email, birthday, cpf, typeAccount) 
                    VALUES 
                    ('${ulid()}', '${name}', '${email}', '${birthday}', '${cpf}', '${typeAccount}');`;
        conn.run(sql, callback);
    }

    findAll (callback) {
    const sql = 'SELECT * FROM customers;';
    conn.all(sql, callback)
    }

    findOne (data, callback) {
        const sql = `SELECT * FROM customers WHERE id = '${data.id}';`;
        conn.get(sql, callback)
    }

    updatePartial (id, data, callback) {
        let customerData = Object.entries(data);
        let fields = []
        for (let i = 0; i < customerData.length; i++) {
            fields.push(`'${customerData[i][0]}' = '${customerData[i][1]}'`);
        }
        const sql = `UPDATE customers 
                    SET ${fields.join(",")}
                    WHERE id = '${id}';`;
        conn.run(sql, callback);
        
    }

    delete (data, callback) {
        const sql = `DELETE FROM customers WHERE id = '${data.id}';`;
        conn.run(sql, callback)
    }
}

// instanciando um objeto para ser exportado e criar um novo objeto
module.exports = new Customer();
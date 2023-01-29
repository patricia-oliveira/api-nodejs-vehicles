//!importação de módulos
// para a app entender o .env
const env = require("dotenv").config().parsed;
// importação do módulo express e criação da aplicação 
// execução da função creaApplication do express
const app = require('express')();
// middleware para interpretar o corpo das requisições como json
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors()); 


//! mapeamento das rotas
//require('../routes/users')(app); 
const customers = require('../routes/customers');
app.use("/customers", customers)

//! habilitação da app
app.listen(env.PORT, () => {console.log(`servidor em execução na porta ${env.PORT}`)});
// quando a app começar a monitorar a porta 8080, a função callback será executada
// callback - 3 opções: funcção nomeada, função anônima ou arrow function

 
/*
MVC - MODEL VIEW CONTROLLER
MODEL - onde guardo as informações (por exemplo, banco de dados)
VIEW - ponto de entrada, onde chamo a aplicação (por exemplo, swagger - pensando só em backend)
CONTROLLER - ponte entre a VIEW e o MODEL, camada qu concentra a lógica de funcionamento da aplicação
 */
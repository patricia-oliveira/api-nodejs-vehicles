// referência de estudo para uma forma de mapeamento de rotas

module.exports = function (app) {
    
    app.post("/users/", (req, res) => {res.send("http post")}); // criar um usuário - HTTP POST

    app.get("/users/", function (req, res) {res.send("http get")}); // recuperar um usuário - HTTP GET

    app.put("/users/", function (req, res) {res.send("http put")}); // atualizar um usuário - HTTP UPDATE

    app.delete("/users/", function (req, res) {res.send("http del")}); // excluir um usuário - HTTP DELETE

};
/*
export da função anônima (app), 
que será levado no require em app.js para que reconheça as rotas mapeadas em users.js
*/

/* 
req - incoming message; res - server response 
middleware - toda função callback que recebe um request e um response - function(req, res) {}
caso haja mais de um middleware - adicionar o argumento next para que vá para o próximo callback
function(req, res, next) {console.log("step 1") next()};

app.get(
    "/", 
    function(req, res, next) {
    console.log("step 1");
    next();
    },
    function(req, res, next) {
    console.log("step 2");
    }
);
*/
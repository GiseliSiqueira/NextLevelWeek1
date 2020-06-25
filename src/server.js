const express = require("express")
const server = express()

//pegar o banco de dados
const db = require("./database/db.js")

//configurar pasta publica
server.use(express.static("public"))

//habilitar o uso do req.body na aplicação
server.use(express.urlencoded({extended: true}))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {//pasta onde estao os html
    express: server,
    noCache: true
})


//configurar caminhos da aplicação
//pagina inicial
//req - requisição
//res - resposta
server.get("/", (req, res) => {
    return res.render("index.html", {title: "um titulo"}) //metodo render também envia variáveis, objetos, etc
})

server.get("/create-point", (req, res) => {
    
    //req.query: Query strings da url
    req.query

    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
    
    //req.body: O corpo do nosso formulário
    //console.log(req.body)
    
    //Inserir dados no banco de dados
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (
            ?, ?, ?, ?, ?, ?, ?);
`

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    //função anonima
    function afterInsertData(err){
        if(err) {
            console.log(err)
            return res.send("Erro no cadastro!")
        }
        console.log("Cadastrado com sucesso")
        console.log(this) //referencia a resposta trazida pelo run
        
        return res.render("create-point.html", {saved:true})
    }

    db.run(query, values, afterInsertData) //função afterInsertData executada como callback
    
})

server.get("/search", (req, res) => {
    
    const search = req.query.search

    if (search == "") {
        //pesquisa vazia
        return res.render("search-results.html", {total: 0})
    }
    
    //pegar os dados no banco de dados
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
        if(err) {
            return console.log(err)
        }

        //total de itens cadastrados no banco de dados
        const total = rows.length

        //mostrar a pagina html com os dados do banco de dados
        return res.render("search-results.html", {places: rows, total: total})
    })

})

//ligar o servidor
server.listen(3000)

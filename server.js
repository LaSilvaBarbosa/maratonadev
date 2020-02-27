//configurando o servidor
const express =  require("express");
const server = express();

server.use(express.static("public"));

//habilitar o body do formulario 
server.use(express.urlencoded({extended: true}))

//configurando a template engine
const nunjucks = require("nunjucks");
nunjucks.configure("./", {
    express: server, 
    noCache: true, //boolean aceita dois valores, verdadeiro ou falso
});

//configurar a aprensetação da pagina
server.get("/", function(requisicao, resposta) {
    return resposta.render("index.html", { donors })
});

//pegar dados do formulario (usar o requisicao) 
server.post("/", function(requisicao, resposta){
    const name = requisicao.body.name
    const email = requisicao.body.email
    const blood = requisicao.body.blood

    //colocar valores dentro do array
    donors.push({
        name: name,
        blood: blood
    });

    return resposta.redirect("/")

});

//lista de doadores = Vetor ou array
const donors = [
    {
        name : "Diego Fernandes",
        blood : "AB+"
    },
    {
       name : "Cleiton Nunes",
       blood : "B+"
   },
   {
       name : "Larissa da Silva",
       blood : "O+"
   },
   {
       name : "Lucas Simoes",
       blood : "O-"
   }
]

 
//ligar o servidor e permitir o acesso na porta 3000
server.listen(3000, function()  {  
    console.log("iniciei o servidor"); 
});




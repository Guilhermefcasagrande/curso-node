var express = require('express');
var app = express();

// É uma boa prática usar o ./ quando o arquivo estiver no mesmo nível
var msg = require('./mod_test');

app.set('view engine', 'ejs');

// Define as rotas
app.get('/noticias', function(req, res){
    res.render('noticias/noticias');
});

app.get('/formulario_inclusao_noticia', function(req, res){
    res.render('admin/form_add_noticia');
});

app.get('/', function(req, res){
    res.render('home/index');
});

// Cria o servidor
app.listen(3000, function(){
    console.log(msg());
});



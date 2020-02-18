const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const rp = require('request-promise');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/RESTfulBlogApp', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.static('themes')) ;
app.use(bodyParser.urlencoded({extend: true}));
app.set('view engine', 'ejs');

const blog = mongoose.model('Blog', {
    title: String,
    image: String,
    body: String,
    created: Date
});

app.get('/', function(req, res){
    res.render('home');
});

app.get('/blog', function(req, res){
    blog.find({}, function (err, blog) {
        if(err){
            console.log(err);
        } else {
            console.log('all the pizzas');
            res.render('index', {blog: blog})
        }
    })
});

app.get('/blog/new', function(req, res){
    res.render('createBlog');
});

app.post('/blog', function(req, res){
    let title = req.body.title;
    let image = req.body.imgURL;
    let body = req.body.body;
    let created = new Date;
    let blogSchema = {
        title: title,
        image: image,
        body: body,
        created: created
    };
    blog.create(blogSchema, function (err, blog) {
        if (err) return handleError(err);
    });

    res.redirect('/blog')
});

app.get('/blog/:id', function(req, res){
    res.render('show');
});

app.get('*', function(req, res){
    res.send('404');
});

app.listen(8016);

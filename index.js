const path = require('path');
const express = require('express');
const ejs = require("ejs");
const app = express();
const mongoose = require('mongoose');
var Employee = require('./employee');
var product = require('./product');
var buy = require('./buy');
mongoose.connect('mongodb://127.0.0.1:27017/arash')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
console.log(__dirname);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get('/show', (req, res) => {
    Employee.find().then((data) =>
        res.render('show', { results: data }));
});
app.post('/update', function(req, res) {
    Employee.updateOne({ id: req.body.id }, {
        $set: {
            name: req.body.name,
            salary: req.body.salary,
            age: req.body.age
        }
    }).then(() =>
        console.log("updated"));
    res.end();
});
app.post('/addemployee', function(req, res) {
    Employee.create({
        id: req.body.id,
        name: req.body.name,
        salary: req.body.salary,
        age: req.body.age
    });
    console.log("created");
    res.end();
});
app.post('/delete', function(req, res) {
    Employee.deleteOne({ id: req.body.id }).then(() =>
        console.log("deleted"));
    res.end();
});
app.get('/create', (req, res) => { 
    res.render('create');
});
app.get('/delete', (req, res) => { 
    res.render('delete');
});
app.get('/update', (req, res) => {
    res.render('update');
});
app.get('/first',(req,res)=>{
    res.render('first')
});
app.get('/',(req,res)=>{
    res.render('navbar')
});
app.get('/show1', (req, res) => {
    product.find().then((data) =>
        res.render('show1', { results: data }));
});
app.post('/update1', function(req, res) {
    product.updateOne({ id: req.body.id }, {
        $set: {
            productname: req.body.productname,
            productprice: req.body.productprice,
            productquality: req.body.productquality
        }
    }).then(() =>
        console.log("updated"));
    res.end();
});
app.post('/addproduct', function(req, res) {
    product.create({
        productid: req.body.productid,
        productname: req.body.productname,
        productprice: req.body.productprice,
        productquality: req.body.productquality
    });
    console.log("created");
    res.end();
});
app.post('/delete1', function(req, res) {
    product.deleteOne({ productid: req.body.productid}).then(() =>
        console.log("deleted"));
    res.end();
});
app.get('/create1', (req, res) => { 
    res.render('create1');
});
app.get('/delete1', (req, res) => { 
    res.render('delete1');
});
app.get('/update1', (req, res) => {
    res.render('update1');
});
app.get('/second',(req,res)=>{
    res.render('second')
});
app.get('/show2', (req, res) => {
    product.find().then((data) =>
        res.render('show2', { results: data }));
});
app.post('/update2', function(req, res) {
    product.updateOne({ id: req.body.id }, {
        $set: {
            productname: req.body.productname,
            productprice: req.body.productprice,
            productquality: req.body.productquality
        }
    }).then(() =>
        console.log("updated"));
    res.end();
});
app.post('/addbuy', function(req, res) {
    product.create({
        productid: req.body.productid,
        productname: req.body.productname,
        productprice: req.body.productprice,
        productquality: req.body.productquality
    });
    console.log("created");
    res.end();
});
app.post('/delete2', function(req, res) {
    product.deleteOne({ productid: req.body.productid}).then(() =>
        console.log("deleted"));
    res.end();
});
app.get('/create2', (req, res) => { 
    res.render('create2');
});
app.get('/delete2', (req, res) => { 
    res.render('delete1');
});
app.get('/update2', (req, res) => {
    res.render('update2');
});
app.get('/third',(req,res)=>{
    res.render('third')
});
app.get('/',(req,res)=>{
    res.render('navbar')
});
app.listen(8787, () => {
    console.log('Server is running at port 8000');
});

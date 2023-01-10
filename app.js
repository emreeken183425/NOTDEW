const path=require('path')
const express=require('express')
const app=express()
const exphbs=require('express-handlebars')
const port=3000
const hostname='127.0.0.1'

const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1/nodeblog_db',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.use(express.static('public'))//static ile public klasöründen verileri aldık
app.engine('handlebars', exphbs.engine())// exphbs bı fonksiyon default olarak gider views/layouts içindeki main alır
app.set('view engine', 'handlebars')

app.get('/',(req,res)=>{
    res.render('site/index');
})
app.get('/about',(req,res)=>{
    res.render('site/about');
})
app.get('/blog',(req,res)=>{
    res.render('site/blog');
})
app.get('/contact',(req,res)=>{
    res.render('site/contact');
})
app.get('/login',(req,res)=>{
    res.render('site/login');
})
app.get('/register',(req,res)=>{
    res.render('site/register');
})



app.listen(port,()=>{
    console.log(`Server çalıştı,http://localhost:${port}  `);
})
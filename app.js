const path=require('path')
const express=require('express')
const app=express()
const exphbs=require('express-handlebars')
const port=3000

app.use(express.static('public'))//static ile public klasöründen verileri aldık
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/',(req,res)=>{
    res.render('site/index.html');
})
app.get('/about',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'site/about.html'))
})
app.get('/blog',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'site/blog.html'))
})





app.listen(port,()=>{
    console.log(`Server çalıştı,http://localhost:${port}  `);
})
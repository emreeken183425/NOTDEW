const mongoose=require('mongoose')
const post = require('./models/Post')
const Post=require('./models/Post')


mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


Post.findByIdAndDelete('63bdc98d844caaef9797a18e',(err,post)=>{
    console.log(err,post);
})

/*******  GET/UPDATE İŞLEMİ   *****
// //*? id ye göre update 
// Post.findByIdAndUpdate('63bdc4667610e9b38f7daca2',{
//     title:'Benim updateim'
// },(err,post)=>{
//     console.log(err,post);
// }) */

 /*  *******  GET/FİND İŞLEMİ   *****
//*! veritabanından veri bulmak 
Post.find({
    title:'My first header'
},(error,post)=>{
    console.log(error,post);
})
//*! id ye göre bulma 
Post.findById('63bdc4667610e9b38f7daca2',(err,post)=>{
    console.log(err,post);
})

//*? bu şekilde tüm verileri bulur
Post.find({},(error,post)=>{
    console.log(error,post);
}) 

*/

/* ****** CREATE POST İŞLEMİ   *****
 Post.create({
     title:'My first 11111',
     content:'Post include lorem 22222'
 },(error,post)=>{
     console.log(error,post);

 }) */
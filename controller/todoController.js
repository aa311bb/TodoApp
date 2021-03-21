var bodyParser=require('body-parser');
//对数据进行解析
var urlencodeParser=bodyParser.urlencoded({extended:false})

var data=[
    {item:"欢迎来到node"},
    {item:"没时间了"},
    {item:"速冲"}
]

module.exports=function(app){
    //获取数据
    app.get('/todo',function(req,res){
        res.render('todo',{todos:data});
    })

    //传递数据
    app.post('/todo',urlencodeParser,function(req,res){
        data.push(req.body)
    });

    //删除数据
    app.delete('/todo/:item',function(req,res){
        data=data.filter(function(todo){
            return req.params.item!==todo.item;
        });
        res.json(data)
    })
}
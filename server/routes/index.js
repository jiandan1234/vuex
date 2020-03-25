var express = require('express');
var router = express.Router();
// 引入数据库
var connection =require("./conn")
// 连接数据库
connection.connect(()=>{
  console.log("数据库连接成功")
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/checklogin",(req,res)=>{
  let {username,password}=req.body;
  console.log(username,password)
  // sql查询，这个地方特别注意${}
  const sqlStr = `select * from users where username="${username}" and password="${password}"`;
  // 执行查询
  connection.query(sqlStr,(error,data)=>{
    if(error){
      throw error;
    }else{
      res.send(data)
    }
  })
})


module.exports = router;

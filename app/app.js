
const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());
// const port = 3000;
// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views","./src/views");     // 두번째 파람 폴더
app.set("view engine", "ejs");  // view 엔진 선택

app.use("/", home);  // use -> 미들 웨어를 등록해주는 메서드. 루트로 들어오면 home으로 보내준다
app.use(express.static(`${__dirname}/src/public`));

// app.get('/user/:id', (req, res) => {
//     // const q = req.params;
//     // console.log(q);
//     // console.log(q.id);

//     const q=req.query
//     console.log(q);
//     res.json({'userid':q.id})
// })

// app.get('/sound/:name', (req, res) => {
//     const {name} =req.params
//     console.log(name);

//     if(name=="dog"){
//         res.json({'sound':'멍멍'})
//     }else if(name=="cat"){
//         res.json({'sound':'야옹'})
//     }
// })

module.exports = app;
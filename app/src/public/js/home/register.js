"use strict";

// const { application } = require("express");

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register(){
    console.log(psword);
    console.log(confirmPsword);
    if(!id.value) return alert("아이디 입력!");

    if(psword.value !== confirmPsword.value ) return alert("비밀번호 불일치!!");
    
    const req ={
        id : id.value,
        name : name.value,
        psword : psword.value,
    };
    console.log(req);
    //데이터 전달
    fetch("/register", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    // .then(console.log); // 동일 .then((res) => console.log(res))
    .then((res) =>{
        if(res.success){
            location.href="/login";
        }else{
            alert(res.msg);
        }
    })
    .catch((err) =>{
        // console.log(new Error("로그인중 에러발생"));
        console.error("회원가입 중 에러발생");
    });
    
    
}
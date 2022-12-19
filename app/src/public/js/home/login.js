"use strict";

// const { application } = require("express");

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req ={
        id : id.value,
        psword : psword.value,
    };

    //데이터 전달
    fetch("/login", {
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
            location.href="/";
        }else{
            alert(res.msg);
        }
    })
    .catch((err) =>{
        // console.log(new Error("로그인중 에러발생"));
        console.error("로그인중 에러발생");
    });
    
    
}
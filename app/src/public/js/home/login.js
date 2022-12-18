"use strict";

const { application } = require("express");

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
        header:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    });
    
}
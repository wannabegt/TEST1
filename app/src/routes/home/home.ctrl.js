"use strict";

const User = require("../../models/User");

const output = {
    home : (req, res) => {
        res.render("home/index");
    },
    login : (req, res) => {
        res.render("home/login");
    },
    register : (req, res) => {
        res.render("home/register");
    }
};

const process = {
    login: (req, res)=>{
        const user = new User(req.body);    // User 클래스를 user로 인스턴스화
        const response = user.login();
        return res.json(response);
    },
    register: (req, res) => {
        const user = new User(req.body);    // User 클래스를 user로 인스턴스화
        const response = user.register();
        return res.json(response);        
    }
};

module.exports = {
    output,
    process,
};
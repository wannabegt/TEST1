"use strict";

const logger = require("../../config/logger");
const User = require("../../models/User");

const output = {
    home : (req, res) => {
        logger.info(`GET / 304 "홈 화면이동"`);
        res.render("home/index");
    },

    login : (req, res) => {
        logger.info(`GET /login 304 "로그인 화면이동"`);
        res.render("home/login");
    },

    register : (req, res) => {
        logger.info(`GET /register 304 "회원가입 화면이동"`);
        res.render("home/register");
    }
};

const process = {
    login: async (req, res)=>{
        const user = new User(req.body);    // User 클래스를 user로 인스턴스화
        const response = await user.login();
        const url = {
            method: "POST",
            path: "/login",
            status: response.err ? 400 : 200,
        };

        log(response, url);
        return res.status(url.status).json(response);
    },
    register: async (req, res) => {
        const user = new User(req.body);    // User 클래스를 user로 인스턴스화
        const response = await user.register();
        const url = {
            method: "POST",
            path: "/register",
            status: response.err ? 409 : 201,
        };        
        log(response, url);
        return res.status(url.status).json(response);        
    }
};

module.exports = {
    output,
    process,
};

const log = (response, url) => {
    if(response.err){
        logger.error(
            `${url.method} ${url.path} ${url.status} Response: ${response.success}, msg: ${response.err}`
        );
    }else{
        logger.info(
            `${url.method} ${url.path} ${url.status} Response: ${response.success}, msg: ${response.msg || ""}`
        );    
    }
    
}
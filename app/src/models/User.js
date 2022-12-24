"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){  //생성자 생성
        this.body = body;
    }

    async login(){    //메소드 생성
        const client = this.body;
        const {id, psword} = await UserStorage.getUserInfo(client.id);
        
        if(id){
            if(id === client.id && psword === client.psword){
                return { success : true};        //오브젝트 형태로 반환
            }
            return {success: false, msg: "비밀번호 틀림"};
        }
        return {success: false, msg: "존재하지 않는 아이디"};
    }
    async register(){
        const client = this.body;
        try{
            const response = await UserStorage.save(client);
            return response;
        }catch(err){
            const a = {success : false, msg: err};
            console.log(typeof a);
            return a;
        }

    }
}

module.exports = User;
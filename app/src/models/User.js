"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){  //생성자 생성
        this.body = body;
    }

    async login(){    //메소드 생성
        const client = this.body;
        try{
            const user = await UserStorage.getUserInfo(client.id);
            
            if(user){
                if(user.id === client.id && user.psword === client.psword){
                    return { success : true};        //오브젝트 형태로 반환
                }
                return {success: false, msg: "비밀번호 틀림"};
            }
            return {success: false, msg: "존재하지 않는 아이디"};
        } catch(err){
            return{ success: false, err} ;
        }
    }
    async register(){
        const client = this.body;
        try{
            const response = await UserStorage.save(client);
            return response;
        }catch(err){
            const a = {success : false, err};
            return a;
        }

    }
}

module.exports = User;
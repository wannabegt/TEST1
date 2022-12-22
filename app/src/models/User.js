"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){  //생성자 생성
        this.body = body;
    }

    login(){    //메소드 생성
        const client = this.body;
        const {id,psword} = UserStorage.getUserInfo(client.id);
        
        if(id){
            if(id === client.id && psword === client.psword){
                return { success : true};        //오브젝트 형태로 반환
            }
            return {success: false, msg: "비밀번호 틀림"};
        }
        return {success: false, msg: "존재하지 않는 아이디"};
    }
    register(){
        const client = this.body;
        const response = UserStorage.save(client);
        return response;
    }
}

module.exports = User;
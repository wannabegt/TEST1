"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){  //생성자 생성
        this.body = body;
    }

    login(){    //메소드 생성
        const body = this.body;
        const {id,psword} = UserStorage.getUserInfo(body.id);
        
        if(id){
            if(id === body.id && psword === body.psword){
                return { success : true};        //오브젝트 형태로 반환
            }
            return {success: false, msg: "비밀번호 틀림"};
        }
        return {success: false, msg: "존재하지 않는 아이디"};
    }
}

module.exports = User;
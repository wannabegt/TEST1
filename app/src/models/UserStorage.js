"use strict";

const db = require("../config/db.js");

class UserStorage{
    

    // static getUsers(isAll, ...fields){     //클래스 자체에서 메서드에 접근하려면 static 붙여줘야한다

  
    // }

    static getUserInfo(id){
        return new Promise((resolve, reject) =>{
            const query = "select * from users where id=?;";
            db.query(query,[id] ,(err, data) =>{
                if(err) reject(`${err}`);
                else resolve(data[0]);
            });
        });        
    }

    static async save(userInfo){
        return new Promise((resolve, reject) =>{
            const query = "insert into users(id, name, psword) values (?,?,?);";
            db.query(query,[userInfo.id, userInfo.name, userInfo.psword] 
                ,(err) =>{
                if(err) reject(`${err}`);
                else resolve({ success : true });
            });
        });    
    }

}

module.exports = UserStorage;
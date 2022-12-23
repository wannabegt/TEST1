"use strict";

const fs = require("fs").promises;

class UserStorage{
    
    static #getUserInfo(data,id){
        const users=JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);   // => [id,psword,name]
        const userInfo = usersKeys.reduce((newUsers, info) =>{
            newUsers[info] = users[info][idx];
            return newUsers;
        },{});

        return userInfo;
    }

    static getUsers(...fields){     //클래스 자체에서 메서드에 접근하려면 static 붙여줘야한다
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) =>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        
        return newUsers;
    }

    static getUserInfo(id){
        // const users = this.#users;
        return fs.readFile("./src/databases/users.json")
            .then((data) =>{
                return this.#getUserInfo(data,id);
            })
            .catch(console.error);


    }

    static save(userInfo){
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return {success : true};
    }

}

module.exports = UserStorage;
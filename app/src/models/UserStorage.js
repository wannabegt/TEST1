"use strict";

class UserStorage{
    
    static #users ={     //static 정적변수로 만들면 클래스에서 직접 접근가능. # 붙여 은닉화
        id: ["wannabena","test1", "test2"],
        psword: ["12345","12345","1234"],
        name: ["가가가","나나나","다다다"],
    };
    static getUsers(...fields){     //클래스 자체에서 메서드에 접근하려면 static 붙여줘야한다
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) =>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        
        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);   // => [id,psword,name]
        const userInfo = usersKeys.reduce((newUsers, info) =>{
            newUsers[info] = users[info][idx];
            return newUsers;
        },{});

        return userInfo;
    }

    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return {success : true};
    }

}

module.exports = UserStorage;
class UserManager {
    static #users = [];
    create(data){
        const user = {
            //id: UserManager.#users.length+1,
            id: UserManager.#users.length === 0
                ? 1
                : UserManager.#users[UserManager.#users.length-1].id+1,
            foto: data.foto,
            mail: data.mail,
            password: data.password,
            role: 0
        };
        UserManager.#users.push(user);
    }
}

const usuarios = new UserManager();

usuarios.create({foto: "foto.png", mail: "email@ejemplo.com" , password: "1234"});
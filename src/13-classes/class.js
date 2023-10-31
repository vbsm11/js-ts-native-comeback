class DeleteUserAction {
    constructor(userId) { // обязательный метод для конструирования однотипных объектов
        this.type = 'DELETE-USER';
        this.payload = {
            userId: userId
        }
    }
}

const action1 = new DeleteUserAction(123213)
const action2 = new DeleteUserAction(133)

console.log(action1)
console.log(action2)

/////////////////////////////////////////////////////

class User {
    constructor(name, site, dob) {
        this.name = name;
        this.site = site;
        this.dateOfBirth = dob
    }

    hello() {
        console.log(`I am ${this.name} from ${this.site}`)
    }
}

const u1 = new User('Vova', 'it-incubator.ru', new Date(1998, 2, 1))

const u2 = new User('Dima', 'kursk.ru', new Date(2000, 8, 9))

u1.hello()
u2.hello()

console.log(u1.hello === User.prototype.hello) // TRUE - СМОТРИ prototype.js


/////////////////////////////////////////////////////////////////////////////////////////////////

class User1 {
    #name = '' // приватное свойство, можем обратиться к нему только из методов класса (инкапсуляция, сокрытие деталей)

    constructor(name, site, dob) {
        this.#name = name;
        this.site = site;
        this.dateOfBirth = dob
    }

    get name() { // метод геттер, позволяет считывать скрытое свойство
        return this.#name + 'is my name'
    }

    set name(value) { // метод "сеттер", позволяет менять скрытое свойство
        if (value === 'Dima') throw new Error('Dima is not allowed name') // можно прокинуть ошибку
        this.#name = value
    }

}

const u3 = new User('Vova', 'it-incubator.ru', new Date(1998, 2, 1))

console.log(u3.#name) // ошибка - скрытое свойство

u3.name = 'Dima' // ошибка
u3.name = 'Kolya'
console.log(u3.name) // Kolya
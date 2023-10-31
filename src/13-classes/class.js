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

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// наследование, расширение классов

class Coder extends User {
    constructor(name, site, dob, tech) { // расширяем метод constructor, для этого в него передаем все атрибуты из исходного класса и новые
        super(name, site, dob) // метод конструктор наследуемого класса
        this.tech = tech // присваиваем новое свойство
    }

    code() {
        console.log(`hello, my name is ${this.#name}, here is ${this.tech} my code: const sum = (a, b) => a+b`)
    }

    hello() {
        super.hello(); // метод hello наследуемого класса
        console.log('go away')
    }
}

const coder1 = new Coder('Kolya', 'moscow.ru', new Date(1998, 12, 12))

coder1.hello() // нам доступны методы из класса User
coder1.code() // и так же новые методы


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
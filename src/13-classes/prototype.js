function DeleteUserAction(userId) {
    // this = {} - создается объект this, поначалу пустой
    this.type = 'DELETE-USER';
    this.payload = {
        userId: userId
    }
    // return this - происходит по умолчанию, если вызовем ф-цию с помощью new
}

const action1 = new DeleteUserAction('211242') // создаем объект через оператор new
console.log(action1)

////////////////////////////////////////////////////////////////////////////////

function User(name, site, dob) {
    this.name = name;
    this.site = site;
    this.dateOfBirth = dob
}

User.prototype.hello = function() {
    console.log(`I am ${this.name} from ${this.site}`)
} // добавляем метод prototype, чтобы при каждом вызове ф-ции конструктора не метод(функция) не создавался заново каждый раз

const u1 = new User('Vova', 'it-incubator.ru', new Date(1998, 2, 1))

u1.hello()
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
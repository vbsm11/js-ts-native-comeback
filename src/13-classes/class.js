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
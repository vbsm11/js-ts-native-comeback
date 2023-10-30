const deleteUser = (userId) => {
    const action = {
        type: 'DELETE-USER',
        payload: {
            userId: userId
        }
    }
    return action
}

const action1 = deleteUser('234324')
const action2 = deleteUser('534543')

console.log(action1)
console.log(action2)


///////////////////////////////////////////////////////////////////////////

function commonHello() {
    console.log(`I am ${this.name} from ${this.site}`)
}

const userFabric = (name) => {
    const user = {
        name: name,
        site: 'it-incubator.ru',
        dateOfBirth: new Date(1998, 2, 1),
        hello: commonHello
    }
    return user
}

const u1 = userFabric('Vova')
const u2 = userFabric('Dima')

u1.hello()
u2.hello()
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
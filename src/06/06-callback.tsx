// const callback = () => {
//   alert('hey')
// }

// window.setTimeout(callback, 1000)


export const User = () => {

    const deleteUser = () => {
        alert('user have been deleted')
    }

    const saveUser = () => {
        alert('user have been saved')
    }

    const onNameChanged = () => {
        console.log('name changed')
    }

    const focusLostHandler = () => {
        console.log('focus lost')
    }
    
    return (
        <div>
            <textarea 
                onChange={onNameChanged}
                onBlur={focusLostHandler}
            >
                User
            </textarea>

            <input/>
            <div>
                <button onClick={deleteUser}>delete</button>
                <button onClick={saveUser}>save</button>
            </div>
        </div>
    )
}
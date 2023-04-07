import React, {ChangeEvent, MouseEvent} from 'react';

// const callback = () => {
//   alert('hey')
// }

// window.setTimeout(callback, 1000)


export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }

    const onNameChanged = () => {
        console.log('name changed')
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed:' + event.currentTarget.value)
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

            <input onChange={onAgeChanged} type={'number'}/>
            <div>
                <button name='delete' onClick={deleteUser}>delete</button>

            </div>
        </div>
    )
}
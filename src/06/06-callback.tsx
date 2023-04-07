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

  return (
      <div>
          <textarea onChange={onNameChanged}>User</textarea>
        <button onClick={deleteUser}>delete</button>
        <button onClick={saveUser}>save</button>
      </div>
  )
}
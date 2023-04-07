const callback = () => {
  alert('hey')
}

window.setTimeout(callback, 1000)

const User = () => {
  return (
      <div>
        User
        <button>delete</button>
        <button>save</button>
      </div>
  )
}
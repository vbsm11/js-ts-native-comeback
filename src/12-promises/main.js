// promise - обект с методами

const promise1 = axios.get('https://google.com')

// 1ый метод - then

promise1.then((data) => {
    console.log(data)
})

// 2ой метод - catch

promise1.catch((error) => {
    console.log(error)
})
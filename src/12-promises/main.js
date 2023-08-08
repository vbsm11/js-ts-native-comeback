// promise - обект с методами

const promise1 = axios.get('https://google.com')

// 1ый метод - then (promise resolved)

promise1.then((data) => {
    console.log(data)
})

// 2ой метод - catch (promise rejected)

promise1.catch((error) => {
    console.log(error)
})

// цепочка промисов

promise1
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => { // 3ий метод - finally (сработает в любом случае)
        console.log('finish')
    })


// у объекта promise может быть 3 состояния:
// pending - загрузка, ожидание
// fullfiled(resolved) - выполнено
// rejected - ошибка
// если после статуса pending статус преобразовался в один из двух, он уже не изменится


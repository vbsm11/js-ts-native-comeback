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
// fulfilled(resolved) - выполнено
// rejected - ошибка
// если после статуса pending статус преобразовался в один из двух, он уже не изменится


// под капотом промис создается с помощью класса Promise
// у класса Promise есть метод all, который позволяет дождаться, пока выполнятся все промисы, и после этого выполнить какое-то действие

const otherPromise = Promise.all([promise1, promise2])

otherPromise
    .then((results) => { // results - массив результатов в порядке передачи промисов в параметры
        console.log(results)
    })
    .catch(() => { // если хоть один промис не зарезолвился, попадаем в catch
        console.log('initialization failed, try later')
    })

// Промис, созданный при помощи allSettled всегда зарезолвится
// результатом будет массив объектов со свойствами статус промиса, значение и причина (почему промис зареджектился)
const otherPromise2 = Promise.allSettled([promise1, promise2])

otherPromise2
    .then((results) => {
        console.log(results[0].status)
        console.log(results[1].value)
    })
import axios from "axios";
import {log} from "util";

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


// у класса Promise также есть 2 метода, позволяющих создавать промисы,
// которые по умолчанию зарезолвились или зареджектились

const resolvedPromise = Promise.resolve([{}])
resolvedPromise
    .then(data => console.log(data))
    .catch(error => console.warn(error))

const rejectedPromise = Promise.reject({message: 'Some error'})
rejectedPromise
    .then(data => console.log(data))
    .catch(error => console.warn(error))


// ЦЕПОЧКА ПРОМИСОВ
// КАДЖДЫЙ THEN ВОЗВРАЩАЕТ НОВЫЙ ПРОМИС, КОТОРОМУ В DATA ПРИХОДИТ ТО, ЧЕМ ЗАРЕЗОЛВИЛСЯ РОДИТЕЛЬСКИЙ ПРОМИС (ИЛИ ЧТО БЫЛО В RETURN ПРЕДЫДУЩЕГО THEN)
// ЕСЛИ ВНУТРИ ОДНОГО ИЗ THEN В ЦЕПОЧКЕ МЫ ВОЗВРАЩАЕМ ПРОМИС, ТО В СЛЕДУЮЩИЙ THEN ПРИДЕТ ТО, ЧЕМ ОН ЗАРЕЗОЛВИЛСЯ

const pr1 = new Promise()

const pr1_1 = pr1.then(() => {
})

axios.get('https://google.com')
    .then(res => res.data)
    .then(data => console.log(data))

const makeGoogleRequest = () => {
    // const pr = axios.get('https://google.com')
    // const pr2 = pr.then(res => res.data)
    // return pr2
    return axios.get('https://google.com')
        .then(res => res.data)
}

makeGoogleRequest().then(data => console.log(data))


// ASYNC, AWAIT
// await мы можем использовать только внутри асинхронной функции
// асинхронную ф-цию мы можем создать при помощи async

async function run() {
    let res = await axios.get('https://google.com') // при помощи await в res придет то, чем зарезолвится промис
    console.log(res)
// await в какой-то мере альтернатива then
}

run()


// создание промисов

function getNumber() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.random())
        }, 2000)
    })
    return promise
}

getNumber().then(n => console.log(n))


// сохранение в localStorage при помощи промиса (аналогия сохранения данных на сервере)
// например, чтобы избежать остановки приложения в случае его переполнения при синхронном сохранении

const repo = {
    save(data) { // синхронное сохранение
        try {
            localStorage.setItem('key', JSON.stringify(data))
        } catch (error) {
            return false
        }
        return true
    },
    saveAsync(data) { // асинхронное сохранение
        const pr = new Promise((resolve, reject) => {
            try {
                localStorage.setItem('keyAsync', JSON.stringify(data))
                resolve()
            } catch (error) {
                reject(error)
            }
            return pr
        })
    }
}

repo.save({name: 'Dmitriy'}) // синхронная версия, зависнет при проблемах с сохранением
console.log('SAVED')


repo.saveAsync({name: 'Vladimir'}) // асинхронная версия, приложение будет продолжать работать, дожидаясь резолва/реджекта промиса
    .then(() => console.log('SAVED'))
    .catch(error => console.log('NOT SAVED ' + error))


const runSaveAsync = async () => { // асинхронное сохранение при помощи async, await (аналогично then)
    await repo.saveAsync({name: 'Vladimir'})
    console.log('SAVED')
}




////////////////////////////////////////////////////////////обработка ошибок
// catch также возвращает промис
// в catch мы можем не только просто выдать ошибку пользователю, но и вернуть какие-то свои данные для следующего then, чтобы цепочка не сломалась


// ошибку в async/await мы обрабатываем при помощи обычного try/catch


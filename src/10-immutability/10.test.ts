import {
    addBooks, addCompany,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle,
    updateUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from './10';

test('first test', () => {
    let user: UserType = {
        name: 'Alex',
        hair: 32,
        address: {
            city: 'Moscow'
        }
    }

    const styledUser = makeHairstyle(user, 2)

    expect(styledUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(styledUser.address).toBe(user.address)
})

test('second test', () => {
    let user: UserWithLaptopType = {
        name: 'Alex',
        hair: 32,
        address: {
            city: 'Moscow',
            house: 37
        },
        laptop: {
            title: 'Acer'
        }
    }


    const movedUser = moveUser(user, 'Khimki')

    expect(movedUser.address.city).toBe('Khimki')
    expect(movedUser.address).not.toBe(user.address)
    expect(movedUser.laptop).toBe(user.laptop)
})

test('third test', () => {
    let user: UserWithLaptopType = {
        name: 'Alex',
        hair: 32,
        address: {
            city: 'Moscow',
            house: 37
        },
        laptop: {
            title: 'Acer'
        }
    }


    const updateUser = updateUserLaptop(user, 'Macbook')

    expect(updateUser.laptop.title).toBe('Macbook')
    expect(updateUser.address).toBe(user.address)
    expect(updateUser.laptop).not.toBe(user.laptop)
})

test('fourth test', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Alex',
        hair: 32,
        address: {
            city: 'Moscow',
            house: 37
        },
        laptop: {
            title: 'Acer'
        },
        books: ['html', 'css', 'js', 'react']
    }


    const updateUser = moveUserToOtherHouse(user, 99)

    expect(updateUser.address.house).toBe(99)
    expect(updateUser.address).not.toBe(user.address)
    expect(updateUser.laptop).toBe(user.laptop)
    expect(updateUser.books).toBe(user.books)
})

test('5th test', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Alex',
        hair: 32,
        address: {
            city: 'Moscow',
            house: 37
        },
        laptop: {
            title: 'Acer'
        },
        books: ['html', 'css', 'js', 'react']
    }


    const updateUser = addBooks(user, ['ts', 'rest api'])

    expect(updateUser.books[4]).toBe('ts')
    expect(updateUser.books[5]).toBe('rest api')
    expect(updateUser.address).toBe(user.address)
    expect(updateUser.laptop).toBe(user.laptop)
    expect(updateUser.books).not.toBe(user.books)
})

test('6th test', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Alex',
        hair: 32,
        address: {
            city: 'Moscow',
            house: 37
        },
        laptop: {
            title: 'Acer'
        },
        books: ['html', 'css', 'js', 'react']
    }


    const updateUser = updateBook(user, 'js', 'ts')

    expect(updateUser.books[2]).toBe('ts')
    expect(updateUser.address).toBe(user.address)
    expect(updateUser.laptop).toBe(user.laptop)
    expect(updateUser.books).not.toBe(user.books)
})

test('7th test', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Alex',
        hair: 32,
        address: {
            city: 'Moscow',
            house: 37
        },
        laptop: {
            title: 'Acer'
        },
        books: ['html', 'css', 'js', 'react']
    }


    const updateUser = removeBook(user, 'js')

    expect(updateUser.books[2]).toBe('react')
    expect(updateUser.books.length).toBe(3)
    expect(updateUser.address).toBe(user.address)
    expect(updateUser.laptop).toBe(user.laptop)
    expect(updateUser.books).not.toBe(user.books)
})

test('8th test', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Alex',
        hair: 32,
        address: {
            city: 'Moscow',
            house: 37
        },
        laptop: {
            title: 'Acer'
        },
        companies: [
            {id: 1, title: 'KTZ'},
            {id: 2, title: 'Term'},
            {id: 3, title: 'BHZ'}
        ]
    }


    const updateUser = addCompany(user, 4, 'google')

    expect(updateUser.companies[3].title).toBe('google')
    expect(updateUser.companies.length).toBe(4)
        expect(updateUser.address).toBe(user.address)
    expect(updateUser.laptop).toBe(user.laptop)
})

test('9th test', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Alex',
        hair: 32,
        address: {
            city: 'Moscow',
            house: 37
        },
        laptop: {
            title: 'Acer'
        },
        companies: [
            {id: 1, title: 'KTZ'},
            {id: 2, title: 'Term'},
            {id: 3, title: 'BHZ'}
        ]
    }


    const updateUser = updateCompanyTitle(user, 2, 'Termotron')

    expect(updateUser.companies[1].title).toBe('Termotron')
    expect(updateUser.companies).not.toBe(user.companies)
    expect(updateUser.address).toBe(user.address)
    expect(updateUser.laptop).toBe(user.laptop)
})

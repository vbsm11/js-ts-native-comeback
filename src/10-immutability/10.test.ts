import {makeHairstyle, moveUser, updateUserLaptop, UserType, UserWithLaptopType} from './10';

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
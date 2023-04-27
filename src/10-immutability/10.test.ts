import {UserType} from './10';

function makeHairstyle(u: UserType, power: number) {
    return {...u, hair: u.hair / power}
}

test('first test', () => {
    let user: UserType = {
        name: 'Alex',
        hair: 32,
        address: {
            title: 'Moscow'
        }
    }

    const styledUser = makeHairstyle(user, 2)

    expect(styledUser.hair).toBe(16)
    expect(user.hair).toBe(32)
})


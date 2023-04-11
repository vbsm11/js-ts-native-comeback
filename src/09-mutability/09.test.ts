function increaseAge(u: UserType): void {
    u.age++
}

type UserType = {
    name: string
    age: number
    address: {
        city: string
    }
}

test('object reference test', () => {
    let user: UserType = {
        name: 'Vladimir',
        age: 24,
        address: {
            city: 'Seltso'
        }
    }

    increaseAge(user);

    expect(user.age).toBe(25);

    const superman = user;

    superman.age = 1000;

    expect(user.age).toBe(1000);
})

test('array reference test', () => {
    let users = [
        {
            name: 'Vladimir',
            age: 24
        },
        {
            name: 'Mama',
            age: 52
        }
    ]

    let admins = users;

    admins.push({
        name: 'Bandyugan',
        age: 10
    })

    expect(users[2]).toEqual({name: 'Bandyugan', age: 10})
})
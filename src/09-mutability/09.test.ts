function inreaseAge(u: UserType): void {
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

    inreaseAge(user);

    expect(user.age).toBe(25);

    const superman = user;

    superman.age = 1000;

    expect(user.age).toBe(1000);
})
test('', () => {
    let props = {
        name: 'Vladimir',
        age: 18,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Lenina'
            }
        }
    }

    // const age = props.age;
    // const lessons = props.lessons
    const {age, lessons} = props
    const {title} = props.address.street


    expect(age).toBe(18)
    expect(lessons.length).toBe(2)
    expect(title).toBe('Lenina')
})



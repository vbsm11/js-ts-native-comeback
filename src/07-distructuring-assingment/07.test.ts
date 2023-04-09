test('', () => {
    let props = {
        name: 'Vladimir',
        age: 18,
        lessons: [{title: '1'}, {title: '2'}]
    }

    const age = props.age;
    const lessons = props.lessons

    expect(age).toBe(18)
    expect(lessons.length).toBe(2)
})



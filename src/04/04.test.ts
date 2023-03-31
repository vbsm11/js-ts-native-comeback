test('should return old men older then 90', ()=> {
    const age = [18 ,20, 22, 1, 100, 90, 14];


    const oldAges = age.filter(age => age > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test('should return cheap c', ()=> {
    const courses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150}
    ];

    /*const cheapPredicate = (courses : CourseType) => courses.price < 160*/


    const cheapCourses = courses.filter(courses => courses.price < 160)

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe('CSS')
    expect(cheapCourses[1].title).toBe('REACT')
})
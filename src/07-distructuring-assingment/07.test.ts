
export type PropsType = {
    name: string,
    age: number,
    lessons: Array<{title: string}>,
    address: {street: {title: string}}
}

let props: PropsType

beforeEach(() => {
    props = {
        name: 'Vladimir',
        age: 18,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Lenina'
            }
        }
    }
})

test(' ', () => {
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    const [ls1, ls2] = props.lessons;
    const [ , , ls3] = props.lessons

    const [ , lsn2, ...restLessons] = props.lessons;

    expect(l1.title).toBe('1');
    expect(l2.title).toBe('2');

    expect(ls1.title).toBe('1');
    expect(ls2.title).toBe('2');
    expect(ls3.title).toBe('3');

    expect(restLessons.length).toBe(1);
    expect(restLessons[0].title).toBe('3');
    expect(restLessons[0]).toStrictEqual({title: '3', name: 'react'});

})
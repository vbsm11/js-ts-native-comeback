import {StudentType} from '../02/02';
import {addSkill, doesStudentLivesIn, makeNotActive} from './03';

let student: StudentType

beforeEach(() => {
    student = {
        id: 1,
        name: 'Vladimir',
        age: 25,
        isActive: true,
        address: {
            streetTitle: 'Lenina 1',
            city: {
                title: 'Seltso',
                countryTitle: 'Russia'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'React'
            }
        ]
    }
})

test('new tech skill should be added', () => {

    addSkill(student, 'JS')

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
})

test('student should be not active', () => {

    makeNotActive(student)

    expect(student.isActive).toBe(false)
})

test('does student lives in city?', () => {

    let result1 = doesStudentLivesIn(student, 'Seltso')
    let result2 = doesStudentLivesIn(student, 'Moscow')

    expect(result1).toBe(true)
    expect(result2).toBe(false)
})

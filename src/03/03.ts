import {StudentType} from '../02/02';
import {GovBuildType} from '../02/02_02';

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeNotActive = (student: StudentType) => {
    student.isActive = false
}

export const doesStudentLivesIn = (student: StudentType, city: string) => {
    return student.address.city.title === city
}

export const addMoneyToBudget = (build: GovBuildType, diff: number) => {
    build.budget = build.budget + diff
}
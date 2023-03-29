import {StudentType} from '../02/02';
import {CityType, GovBuildType, HouseType} from '../02/02_02';

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

export const repairHouse = (house: HouseType) => {
    house.repaired = true
}

export const toFireStaff = (build: GovBuildType, diff: number) => {
    build.staffCount = build.staffCount - diff
}

export const toHireStaff = (build: GovBuildType, diff: number) => {
    build.staffCount = build.staffCount + diff
}

export const createMessage = (city: CityType) => {
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber}.`
}
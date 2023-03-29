type CityType = {
    title: string,
    countryTitle: string
}

type AddressType = {
    streetTitle: string,
    city: CityType
}

type TechnologyType = {
    id: number,
    title: string
}

type StudentType = {
    id: number,
    name: string,
    age: number,
    isActive: boolean,
    address: AddressType,
    technologies: TechnologyType[]
}

const student: StudentType = {
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

console.log(student.technologies[2].title)


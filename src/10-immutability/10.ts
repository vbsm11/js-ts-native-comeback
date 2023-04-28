export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type WithCompaniesType = {
    companies: Array<{ id: number, title: string }>
}

export type CompaniesType = {
    [userName: string]: Array<{ id: number, title: string }>
}

export function makeHairstyle(u: UserType, power: number) {
    return {...u, hair: u.hair / power}
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {...u, address: {...u.address, city}}
}

export function updateUserLaptop(u: UserWithLaptopType, title: string) {
    return {...u, laptop: {...u.laptop, title}}
}

export function moveUserToOtherHouse(u: UserWithBooksType & UserWithLaptopType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house
        }
    }
}

export function addBooks(u: UserWithBooksType & UserWithLaptopType, add: Array<string>) {
    return {
        ...u,
        books: u.books.concat(add)
    }
}

export function updateBook(u: UserWithBooksType & UserWithLaptopType, prevTitle: string, newTitle: string) {
    return {
        ...u,
        books: u.books.map(b => b === prevTitle ? newTitle : b)
    }
}

export function removeBook(u: UserWithBooksType & UserWithLaptopType, delTitle: string) {
    return {
        ...u,
        books: u.books.filter(b => b != delTitle)
    }
}

export function addCompany(u: UserWithLaptopType & WithCompaniesType, id: number, title: string) {
    return {
        ...u,
        companies: [
            ...u.companies,
            {id, title}
        ]
    }
}

export function updateCompanyTitle(u: UserWithLaptopType & WithCompaniesType, id: number, newTitle: string) {
    return {
        ...u,
        companies: u.companies.map(c => c.id === id ? {...c, title: newTitle} : c)
    }
}

export function updateCompanyTitle2(state: CompaniesType, userName: string, id: number, newTitle: string) {
    return {
        ...state,
        [userName]: state[userName].map(c => c.id === id? {...c, title: newTitle}: c)
    }
}

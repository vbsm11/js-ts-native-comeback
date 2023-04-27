export type UserType = {
    name: string
    hair: number
    address: {city: string, house?: number}
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export function makeHairstyle(u: UserType, power: number) {
    return {...u, hair: u.hair / power}
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {...u, address: {...u.address, city}}
}

export function updateUserLaptop(u: UserWithLaptopType, title: string) {
    return {...u, laptop: {title}}
}
export type StreetType = {
    title: string
}

export type AddressType = {
    number: number
    street: StreetType
}

export type HouseType = {
    buildedAt: number,
    repaired: boolean,
    address: AddressType
}


export type GovBuildType = {
    type: string,
    budget: number,
    staffCount: number,
    address: AddressType
}

export type CityType = {
    title: string,
    houses: Array<HouseType>,
    governmentBuildings: Array<GovBuildType>,
    citizensNumber: number
}
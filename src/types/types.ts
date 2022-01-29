export interface TypeDebt {
    id: number,
    name: string,
    sum: number,
    people: number,
    debtInfo: TypeDebtInfo[],
}

export interface TypeFriend {
    name: string,
}

export interface TypeDebtInfo {
    id: string,
    debtorName: string,
    debtMe: string,
    debtMy: string,
}
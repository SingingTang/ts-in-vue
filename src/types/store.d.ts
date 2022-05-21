declare namespace Store {
    export interface ICompany {
        isListed: boolean,
        name: string,
        id: string,
        marketType: EMarketType
    }
    export interface IUser {
        userInfo: {
            id: stirng,
            name: string,
            isVip: boolean,
            age: number,
        }
    }
    export interface IRoot {
        user?: IUser,
        company?: ICompany
    }
}

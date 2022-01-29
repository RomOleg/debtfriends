import { TypeDebt } from "../types/types";

export type DebtNavigationStackRouterParamList = {
    DebtList: undefined,
    DebtInfo: {debtGroup: TypeDebt},
    GroupPeopleList: undefined,
    Login: undefined,
    Registration: undefined,
    ResetPassword: undefined,
}

export type SettingsNavigationStackRouterParamList = {
    Main: undefined,
}

export type NavigationTabRouterParamList = {
    Debts: DebtNavigationStackRouterParamList,
    Settings: SettingsNavigationStackRouterParamList, 
}

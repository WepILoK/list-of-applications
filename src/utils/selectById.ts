import {IData} from "../store/ducks/listItems/contracts/state";

export interface IReturnType {
    rgb?: string
    name?: string
}

export const selectById = (id: number | undefined, array: IData[]): IReturnType => {
    let data = {} as IReturnType
    for (let i = 0; i < array.length; i++) {
        if (id === array[i].id) {
            if (array[i].rgb) {
                data = {rgb: array[i].rgb, name: array[i].name}
            } else {
                data = {name: array[i].name}
            }
        }
    }
    return data
}

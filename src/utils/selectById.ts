import {IData} from "../store/ducks/listItems/contracts/state";


export const selectById = (id: number | undefined, array: IData[]): string | undefined => {
    let rgb
    for (let i = 0; i < array.length; i++) {
        if (id === array[i].id) {
            rgb = array[i].rgb
        }
    }
    return rgb
}

import axios from "axios";
import {IListItemsState, InItem} from "../store/ducks/listItems/contracts/state";
import {ITextAreaValues} from "../components/CreateApplication";


interface IResponse<T> {
    "@odata.context"?: string,
    value: T
}

export const instance = axios.create({
    baseURL: "http://intravision-task.test01.intravision.ru/",
})

const id = "09dbab37-2b64-47a1-8b8a-167f995a72a6"

export const Api = {
    async fetchList() {
        const {data} = await instance.get<IResponse<IListItemsState['items']>>(`odata/tasks?tenantguid=${id}`)
        return data.value
    },
    async createItem(postData: ITextAreaValues) {
        const {data} = await instance.post<IResponse<InItem['id']>>(`api/${id}/Tasks`,
            {
                name: postData.name,
                description: postData.description,
            })
        console.log(data)
        return data
    },

}
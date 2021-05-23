import axios from "axios";
import {IState, InItem} from "../store/ducks/listItems/contracts/state";
import {ITextAreaValues} from "../components/CreateApplication";


interface IResponse<T> {
    value: T
}

export const instance = axios.create({
    baseURL: "http://intravision-task.test01.intravision.ru/",
})

const id = "09dbab37-2b64-47a1-8b8a-167f995a72a6"

export const Api = {
    async fetchListItems() {
        const {data} = await instance.get<IResponse<IState['listItems']>>(`odata/tasks?tenantguid=${id}`)
        return data.value
    },
    async fetchItem(itemId: number) {
        const {data} = await instance.get<InItem>(`api/${id}/Tasks/${itemId}`)
        return data
    },
    async createItem(postData: ITextAreaValues) {
        const {data} = await instance.post<InItem['id']>(`api/${id}/Tasks`,
            {
                name: postData.name,
                description: postData.description,
            })
        return data
    },
    async fetchPriorities() {
        const {data} = await instance.get<IState['priorities']>(`api/${id}/Priorities`)
        return data
    },
    async fetchStatuses() {
        const {data} = await instance.get<IState['statuses']>(`api/${id}/Statuses`)
        return data
    },
}
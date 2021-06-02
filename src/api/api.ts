import axios from "axios";

import {IState, InItem} from "../store/ducks/listItems/contracts/state";
import {ITextAreaValues} from "../pages/ApplicationsList/components/CreateApplication";


interface IResponse<T> {
    value: T
}

interface IUpdate {
    id: number
    comment: string
    statusId: number
    executorId: number
}

export const instance = axios.create({
    baseURL: "http://intravision-task.test01.intravision.ru/",
})

const id = "f8fbaf8b-5fb9-48f2-b77e-f0f84dc626c2"


export const Api = {
    async fetchListItems() {
        const {data} = await instance.get<IResponse<IState['listItems']>>(`odata/tasks?tenantguid=${id}`)
        return data.value
    },
    async fetchItem(itemId: number) {
        const {data} = await instance.get<InItem>(`api/${id}/Tasks/${itemId}`)
        return data
    },
    async updateItem(item: IUpdate) {
        const {data} = await instance.put<InItem>(`api/${id}/Tasks`, {
            id: item.id,
            statusId: item.statusId,
            executorId: item.executorId,
            comment: item.comment
        })
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
    async fetchUsers() {
        const {data} = await instance.get<IState['users']>(`api/${id}/Users`)
        return data
    },
}
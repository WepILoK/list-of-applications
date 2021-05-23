import axios from "axios";
import {IState, InItem} from "../store/ducks/listItems/contracts/state";
import {ITextAreaValues} from "../components/CreateApplication";


interface IResponse<T> {
    value: T
}

interface IUpdate {
        id: number
        name?: string
        description?: string
        comment?: string
        price?: number
        taskTypeId?: number
        statusId?: number
        priorityId?: number
        serviceId?: number
        resolutionDatePlan?: string
        tags?: []
        initiatorId?: number
        executorId?: number
        executorGroupId?: number
}

export const instance = axios.create({
    baseURL: "http://intravision-task.test01.intravision.ru/",
})

const id = "3f94e89b-32c3-4f0f-bd88-0079189046ab"

export const Api = {
    async fetchListItems() {
        const {data} = await instance.get<IResponse<IState['listItems']>>(`odata/tasks?tenantguid=${id}`)
        return data.value
    },
    async fetchItem(itemId: number) {
        const {data} = await instance.get<InItem>(`api/${id}/Tasks/${itemId}`)
        return data
    },
    async updateItem(item: IUpdate){
        console.log(item)
        const {data} = await instance.put<InItem>(`api/${id}/Tasks`,
            {
                id: item.id,
                comment: item.comment,
                statusId: item.statusId,
                executorId: item.executorId
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
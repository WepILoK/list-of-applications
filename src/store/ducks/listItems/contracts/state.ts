import {LoadingStatus} from "../../../types";

interface ITags {
    id: number
    name: string
}

export interface InItem {
    createdAt?: string
    description: string
    executorGroupId?: number
    executorGroupName?: string
    executorId?: string
    executorName?: string
    id: number
    initiatorId?: number
    initiatorName?: string
    name: string
    price?: number
    priorityId?: number
    priorityName?: string
    resolutionDatePlan?: string
    serviceId?: number
    serviceName?: string
    statusId?: number
    statusName?: string
    statusRgb?: string
    tags?: ITags[]
    taskTypeId?: number
    taskTypeName?: string
    updatedAt?: string
}

export interface IListItemsState {
    items: InItem[]
    status: LoadingStatus
}
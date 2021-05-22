import {LoadingStatus} from "../../../types";

interface ITags {
    id: number
    name: string
}

interface IComment {
    id: number
    userName: string
    lifetimeType: number
    createdAt: string
    comment: string
    fieldName: string
    oldFieldValue: string
    newFieldValue: string
}

export interface IPrioritiesOrStatus {
    rgb: string
    id: number
    name: string
}

export interface IOrder {
    id: number
    name: string
    description: string
    createdAt?: string
    updatedAt?: string
    price?: number
    taskTypeId?: number
    taskTypeName?: string
    statusId?: number
    statusName?: string
    statusRgb?: string
    priorityId?: number
    priorityName?: string
    serviceName?: string
    serviceId?: number
    resolutionDatePlan?: string
    tags?: ITags[]
    initiatorId?: number
    initiatorName?: string
    executorId?: string
    executorName?: string
    executorGroupId?: number
    executorGroupName?: string
    lifetimeItems?: IComment[]
}

export interface IState {
    priorities: IPrioritiesOrStatus[]
    statuses: IPrioritiesOrStatus[]
    orders: IOrder[]
    order?: IOrder
    status: LoadingStatus
}
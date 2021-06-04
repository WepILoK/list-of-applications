export enum LoadingStatus {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
    EDIT = 'EDIT',
}

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

export interface IData {
    id: number
    rgb?: string
    name: string
}

export interface InItem {
    id: number
    name: string
    description: string
    statusId: number
    statusName?: string
    statusRgb?: string
    priorityId?: number
    priorityName: string
    resolutionDatePlan: string
    tags: ITags[]
    initiatorId?: number
    initiatorName: string
    executorId: number
    executorName?: string
    lifetimeItems: IComment[]
}

export interface IState {
    priorities: IData[]
    statuses: IData[]
    users: IData[]
    listItems: InItem[]
    item: InItem
    itemStatus: LoadingStatus
}
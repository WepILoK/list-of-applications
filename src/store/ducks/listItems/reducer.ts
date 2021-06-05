import produce, {Draft} from "immer";
import {ActionsType, IActions} from "./contracts/actionTypes";
import {IState, LoadingStatus} from "./contracts/state";

const initialListItemsState: IState = {
    priorities: [],
    statuses: [],
    users: [],
    listItems: [],
    item: {
        id: 0,
        name: '',
        description: '',
        statusId: 0,
        initiatorName: '',
        priorityName: '',
        executorId: 0,
        tags: [],
        resolutionDatePlan: '',
        lifetimeItems: [],
    },
    itemStatus: LoadingStatus.NEVER,
}

export const listItemsReducer = produce((draft: Draft<IState>, action: IActions) => {
    switch (action.type) {
        case ActionsType.SET_LIST_ITEMS:
            draft.listItems = action.payload.reverse()
            break;
        case ActionsType.SET_ITEM_LOADING_STATUS:
            draft.itemStatus = action.payload
            break;
        case ActionsType.SET_ITEM:
            draft.item = action.payload
            break;
        case ActionsType.SET_PRIORITIES_AND_STATUSES_AND_USERS:
            draft.priorities = action.payload.priorities
            draft.statuses = action.payload.statuses
            draft.users = action.payload.users
            break;
        case ActionsType.SET_DEFAULT_ITEM:
            draft.item = {
                id: 0,
                name: '',
                description: '',
                statusId: 0,
                initiatorName: '',
                priorityName: '',
                executorId: 0,
                tags: [],
                resolutionDatePlan: '',
                lifetimeItems: [],
            }
            break;
        default:
            break;
    }
}, initialListItemsState)
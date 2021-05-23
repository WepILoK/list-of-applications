import React from "react";
import {useStyles} from "../pages/theme";
import {IReturnType} from "../pages/ApplicationsList";
import {IData} from "../store/ducks/listItems/contracts/state";


interface InItemsList {
    id: number
    name: string
    priorities: IData[]
    statusId: number
    statusName: string
    statusRgb: string
    priorityId: number
    priorityName: string
    initiatorName: string
    prioritySelected: (priorityId: number | undefined, array: IData[]) => IReturnType
}

export const Application: React.FC<InItemsList> = ({
                                                       id,
                                                       initiatorName,
                                                       name,
                                                       statusName,
                                                       statusRgb,
                                                       priorityId,
                                                       prioritySelected,
                                                       priorities
                                                   }) => {
    const classes = useStyles()

    return (
        <div className={classes.applicationsListItem}>
            <div className={classes.applicationsListPriority}
                 style={{backgroundColor: `${prioritySelected(priorityId, priorities).rgb}`}}/>
            <div className={classes.applicationsListId}>
                {id}
            </div>
            <div className={classes.applicationsListName}>
                {name}
            </div>
            <div className={classes.applicationsListStatus} style={{backgroundColor: `${statusRgb}`}}>
                {statusName}
            </div>
            <div className={classes.applicationsListExecutor}>
                {initiatorName}
            </div>
        </div>
    )
}
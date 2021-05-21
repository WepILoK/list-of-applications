import React from "react";
import {useStyles} from "../pages/theme";


interface InItemsList {
    id: number
    name: string
    statusId?: number
    statusName?: string
    statusRgb?: string
    priorityId?: number
    priorityName?: string
    initiatorName?: string
}

export const ItemsList: React.FC<InItemsList> = ({id,initiatorName,name,statusName,statusRgb,priorityId}) => {
    const classes = useStyles()

    const priorityStyleSelected = () => {
        if (priorityId === 54071) {
            return '#b32c55'
        } else if (priorityId === 54072) {
            return "#fbd6b9"
        } else if (priorityId === 54073) {
            return "#f75394"
        } else if (priorityId === 54074) {
            return "#b32c55"
        } else if (priorityId === 54075) {
            return "#ee0909"
        } else {
            return '#FFFFFF'
        }
    }

    return (
        <div className={classes.applicationsListItem}>
            <div className={classes.applicationsListPriority} style={{backgroundColor: `${priorityStyleSelected()}`}}/>
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
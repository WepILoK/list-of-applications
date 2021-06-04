import React from "react";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {useApplicationListStyles} from "../theme";

import {fetchItem} from "../../../store/ducks/listItems/actionCreators";
import {selectPriorities} from "../../../store/ducks/listItems/selectors";

import {InItem} from "../../../store/ducks/listItems/contracts/state";

import {selectById} from "../../../utils/selectById";



interface InItemsList {
    item: InItem
}


export const Application: React.FC<InItemsList> = ({item}) => {
    const {id, name, statusName, statusRgb, priorityId, executorName} = item
    const classes = useApplicationListStyles()
    const dispatch = useDispatch()
    const priorities = useSelector(selectPriorities)
    const history = useHistory()

    const onClick = () => {
        dispatch(fetchItem(id))
        setTimeout(() => {
            history.push(`/applications/edit/${id}`)
        }, 1500);
    }

    return (
            <div className={classes.applicationsListItem} onClick={onClick}>
                <div className={classes.applicationsListPriority}
                     style={{backgroundColor: `${selectById(priorityId, priorities).rgb}`}}/>
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
                    {executorName}
                </div>
            </div>
    )
}
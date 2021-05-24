import React from "react";
import {useStyles} from "../pages/theme";
import {IReturnType} from "../pages/ApplicationsList";
import {IData, InItem} from "../store/ducks/listItems/contracts/state";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setItem, setItemLoadingStatus} from "../store/ducks/listItems/actionCreators";
import {selectPriorities} from "../store/ducks/listItems/selectors";
import {LoadingStatus} from "../store/types";


interface InItemsList {
    prioritySelected: (priorityId: number | undefined, array: IData[]) => IReturnType
    item: InItem
}

export const Application: React.FC<InItemsList> = ({item, prioritySelected}) => {
    const {id, name, statusName, statusRgb, priorityId, executorName} = item
    const classes = useStyles()
    const dispatch = useDispatch()
    const priorities = useSelector(selectPriorities)

    const onClick = () => {
        dispatch(setItem(item))
        dispatch(setItemLoadingStatus(LoadingStatus.LOADING))
    }

    return (
        <Link to={`/applications/edit/${id}`}>
            <div className={classes.applicationsListItem} onClick={onClick}>
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
                    {executorName}
                </div>
            </div>
        </Link>

    )
}
import React, {useEffect, useState} from "react";
import {Button} from "@material-ui/core";
import {Route, useHistory} from 'react-router-dom';

import {useStyles} from "./theme";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchListItems, fetchPrioritiesAndStatusesAndUsers} from "../store/ducks/listItems/actionCreators";
import {
    selectListItems,
    selectItemLoadingStatus,
    selectListItemsLoadingStatus, selectItem, selectStatuses, selectPriorities
} from "../store/ducks/listItems/selectors";
import {CreateApplication} from "../components/CreateApplication";
import {EditApplication} from "../components/EditApplication";
import {Application} from "../components/Application";
import {IData} from "../store/ducks/listItems/contracts/state";


export interface IReturnType {
    id?: number
    rgb?: string
    name?: string
}

export const ApplicationsList: React.FC = () => {
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch()
    const items = useSelector(selectListItems)
    const loadingStatus = useSelector(selectItemLoadingStatus)
    const item = useSelector(selectItem)
    const statuses = useSelector(selectStatuses)
    const priorities = useSelector(selectPriorities)

    const classes = useStyles()
    const history = useHistory()

    const openCreateBlock = (): void => {
        setVisible(!visible)
        // history.push('/applications/create')
    }

    const openEditItem = () => {
        history.push(`/applications/edit/${item?.id}`)

    }

    const selectById = (priorityId: number | undefined, array: IData[]): IReturnType => {
        let data = {} as IReturnType
        for (let i = 0; i < array.length; i++) {
            if (priorityId === array[i].id) {
                if (array[i].rgb) {
                    data = {rgb: array[i].rgb, name: array[i].name, id: array[i].id}
                } else {
                    data = {name: array[i].name, id: array[i].id}
                }
            }
        }
        return data
    }

    useEffect(() => {
        dispatch(fetchListItems())
    }, [loadingStatus])

    return (
        <div className={classes.applicationsList}>
            <div className={classes.applicationsListButton}>
                <Button onClick={openCreateBlock} variant="contained" color="primary">
                    Создать заявку
                </Button>
            </div>
            <div className={classes.applicationsListItem}>
                <div className={classes.applicationsListHeaderId}>
                    ID
                </div>
                <div className={classes.applicationsListHeaderName}>
                    Название
                </div>
                <div className={classes.applicationsListHeaderStatus}>
                    Статус
                </div>
                <div className={classes.applicationsListHeaderExecutor}>
                    Исполнитель
                </div>
            </div>
            {items.map(item =>
                    <Link key={item.id} to={`/applications/edit/${item.id}`}>
                        <Application prioritySelected={selectById} priorities={priorities} {...item}/>
                    </Link>
                )}
            {/*<Route path='/applications/create'>*/}
            {/*    <CreateApplication openEditItem={openEditItem}/>*/}
            {/*</Route>*/}
            {visible && <CreateApplication openEditItem={openEditItem} onClose={openCreateBlock}/>}
            <Route path='/applications/edit/:id' exact>
                <EditApplication selectById={selectById}/>
            </Route>
        </div>
    )
}


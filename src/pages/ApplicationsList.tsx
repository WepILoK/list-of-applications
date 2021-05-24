import React, {useEffect} from "react";
import {Button} from "@material-ui/core";
import {Route, useHistory} from 'react-router-dom';

import {useStyles} from "./theme";
import {useDispatch, useSelector} from "react-redux";
import {fetchListItems} from "../store/ducks/listItems/actionCreators";
import {
    selectListItems,
    selectItemLoadingStatus, selectItem
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
    const dispatch = useDispatch()
    const items = useSelector(selectListItems)
    const selectedItem = useSelector(selectItem)
    const loadingStatus = useSelector(selectItemLoadingStatus)

    const classes = useStyles()
    const history = useHistory()

    const openCreateBlock = (): void => {
        history.push('/applications/create')
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
                <Application key={item.id} prioritySelected={selectById} item={item}/>
            )}
            <Route path='/applications/create'>
                <CreateApplication/>
            </Route>
            <Route path='/applications/edit/:id' exact>
                <EditApplication selectById={selectById} selectedItem={selectedItem}/>
            </Route>
        </div>
    )
}


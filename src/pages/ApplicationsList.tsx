import React, {useEffect, useState} from "react";
import {Button} from "@material-ui/core";
import {Route, useHistory} from 'react-router-dom';

import {useStyles} from "./theme";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchListItems, fetchPrioritiesOrStatuses} from "../store/ducks/listItems/actionCreators";
import {
    selectListItems,
    selectItemLoadingStatus,
    selectListItemsLoadingStatus
} from "../store/ducks/listItems/selectors";
import {CreateApplication} from "../components/CreateApplication";
import {EditApplication} from "../components/EditApplication";
import {Application} from "../components/Application";


export interface IReturnType {
    rgb: string
    name: string
}

export const ApplicationsList: React.FC = () => {
    const dispatch = useDispatch()
    const items = useSelector(selectListItems)
    const loadingStatus = useSelector(selectItemLoadingStatus)
    const listItemsLoadingStatus = useSelector(selectListItemsLoadingStatus)

    const classes = useStyles()
    const history = useHistory()

    const openCreateBlock = (): void => {
        history.push('/applications/create')
    }

    const openEditItem = () => {
        // history.push(`/applications/edit/${items[0].id}`)
    }

    const arr = [
        {
            id: 555,
            rgb: 'red',
            name: 'ffawf'
        },{
            id: 555,
            rgb: 'red',
            name: 'ffawf'
        }
    ]

    const prioritySelected = (priorityId: number | undefined): IReturnType | undefined => {
        for (let i = 0; i < arr.length; i++) {
            if (priorityId === arr[i].id) {
                return {rgb: arr[i].rgb, name: arr[i].name}
            }
            // console.log(i , arr.length)
        }
    }

    const statusSelected = (statusId: number | undefined) => {
        for (let i = 0; i < arr.length; i++) {
            if (statusId === arr[i].id) {
                return {rgb: arr[i].rgb, name: arr[i].name}
            }
            // console.log(i)
        }
    }

    useEffect(() => {
        dispatch(fetchPrioritiesOrStatuses())
    }, [])

    useEffect(() => {
        dispatch(fetchListItems())
    }, [listItemsLoadingStatus])

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
                        <Application prioritySelected={prioritySelected} {...item}/>
                    </Link>
                )}
            <Route path='/applications/create'>
                <CreateApplication openEditItem={openEditItem}/>
            </Route>
            <Route path='/applications/edit/:id' exact>
                <EditApplication/>
            </Route>
        </div>
    )
}


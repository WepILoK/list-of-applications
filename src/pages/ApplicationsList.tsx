import React, {useEffect, useState} from "react";
import {Button} from "@material-ui/core";
import {useStyles} from "./theme";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchListItems, fetchPrioritiesOrStatuses} from "../store/ducks/listItems/actionCreators";
import {selectListItems} from "../store/ducks/listItems/selectors";
import {CreateApplication} from "../components/CreateApplication";
import {EditApplication} from "../components/EditApplication";
import {ItemsList} from "../components/ItemsList";


export interface IReturnType {
    rgb: string
    name: string
}

export const ApplicationsList: React.FC = () => {
    const [visibleBlock, setVisibleBlock] = useState<'createItem' | 'editItem'| ''>('editItem')
    const dispatch = useDispatch()
    const items = useSelector(selectListItems)
    const classes = useStyles()

    const handleClickOpenCreateItem = (): void => {
        setVisibleBlock('createItem')
    }

    const handleClickOpenEditItem = (): void => {
        setVisibleBlock('editItem')
    }

    const handleCloseModel = (): void => {
        setVisibleBlock('')
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
        dispatch(fetchListItems())
    }, [])

    return (
        <div className={classes.applicationsList}>
            <div className={classes.applicationsListButton}>
                <Button onClick={handleClickOpenCreateItem} variant="contained" color="primary">
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
            {
                items.map(item =>
                    // <Link to='/edit'>
                        <ItemsList prioritySelected={prioritySelected} key={item.id} {...item}/>
                    // </Link>
                )
            }
            { visibleBlock === 'createItem' &&
            <CreateApplication openEditItem={handleClickOpenEditItem} onClose={handleCloseModel}/>}
            { visibleBlock === 'editItem' &&
            <EditApplication {...items[0]} onClose={handleCloseModel}/>}
        </div>
    )
}


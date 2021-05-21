import React, {useEffect, useState} from "react";
import {Button} from "@material-ui/core";
import {useStyles} from "./theme";
import {ItemsList} from "../components/ItemsList";
import {useDispatch, useSelector} from "react-redux";
import {fetchListItems} from "../store/ducks/listItems/actionCreators";
import {selectListItems} from "../store/ducks/listItems/selectors";
import {CreateApplication} from "../components/CreateApplication";
import {EditApplication} from "../components/EditApplication";


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

    useEffect(() => {
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
                items.map(item => <ItemsList key={item.id} {...item}/>)
            }
            { visibleBlock === 'createItem' &&
            <CreateApplication openEditItem={handleClickOpenEditItem} onClose={handleCloseModel}/>}
            { visibleBlock === 'editItem' &&
            <EditApplication {...items[0]} onClose={handleCloseModel}/>}
        </div>
    )
}


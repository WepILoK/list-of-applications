import React, {useEffect} from "react";
import {Route, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import {useApplicationListStyles} from "./style";
import {Button} from "@material-ui/core";

import {CreateApplication} from "./components/CreateApplication";
import {EditApplication} from "./components/EditApplication";
import {Application} from "./components/Application";
import {fetchListItems} from "../../store/ducks/listItems/actionCreators";
import {selectListItems, selectItemLoadingStatus} from "../../store/ducks/listItems/selectors";


export const ApplicationsList: React.FC = () => {
    const classes = useApplicationListStyles()
    const loadingStatus = useSelector(selectItemLoadingStatus)
    const items = useSelector(selectListItems)
    const dispatch = useDispatch()
    const history = useHistory()

    const openCreateBlock = (): void => {
        history.push('/applications/create')
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
                <Application key={item.id} item={item}/>
            )}
            <Route path='/applications/create'>
                <CreateApplication/>
            </Route>
            <Route path='/applications/edit/:id' exact>
                <EditApplication/>
            </Route>
        </div>
    )
}


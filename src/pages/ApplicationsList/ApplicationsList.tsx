import React, {useEffect} from "react";
import {Button} from "@material-ui/core";
import {Route, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import {useApplicationListStyles} from "./theme";

import {fetchListItems} from "../../store/ducks/listItems/actionCreators";
import {
    selectListItems,
    selectItemLoadingStatus
} from "../../store/ducks/listItems/selectors";
import {CreateApplication} from "./components/CreateApplication";
import {Index} from "./components/EditApplication";
import {Application} from "./components/Application";



export const ApplicationsList: React.FC = () => {
    const dispatch = useDispatch()
    const items = useSelector(selectListItems)
    const loadingStatus = useSelector(selectItemLoadingStatus)

    const classes = useApplicationListStyles()
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
                <Index/>
            </Route>
        </div>
    )
}


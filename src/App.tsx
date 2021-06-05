import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import {useDispatch} from "react-redux";

import {useStyles} from "./style";

import {fetchPrioritiesAndStatusesAndUsers} from "./store/ducks/listItems/actionCreators";
import {ApplicationsList} from "./pages/ApplicationsList/ApplicationsList";
import {KnowledgeBase} from "./pages/knowledgeBase";
import {SideMenu} from "./components/SideMenu";
import {Header} from "./components/Header";
import {Staff} from "./pages/Staff";
import {Clients} from "./pages/Сlients";
import {Assets} from "./pages/Assets";
import {Settings} from "./pages/Settings";


function App() {
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPrioritiesAndStatusesAndUsers())
    }, [])

    return (
        <div className={classes.app}>
            <SideMenu/>
            <div>
                <Header/>
                <div className={classes.content}>
                    <Switch>
                        <Route path='/applications' component={ApplicationsList}/>
                        <Route path='/knowledgeBase' component={KnowledgeBase}/>
                        <Route path='/staff' component={Staff}/>
                        <Route path='/clients' component={Clients}/>
                        <Route path='/assets' component={Assets}/>
                        <Route path='/settings' component={Settings}/>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default App;

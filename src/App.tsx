import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import {SideMenu} from "./components/SideMenu";
import {Header} from "./components/Header";
import {useStyles} from "./pages/theme";
import {ApplicationsList} from "./pages/ApplicationsList";
import {fetchPrioritiesAndStatusesAndUsers} from "./store/ducks/listItems/actionCreators";
import {useDispatch} from "react-redux";
import {KnowledgeBase} from "./pages/knowledgeBase";
import {Staff} from "./pages/Staff";
import {Clients} from "./pages/Сlients";
import {Assets} from "./pages/Assets";
import {Settings} from "./pages/Settings";

function App() {
    const classes = useStyles()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPrioritiesAndStatusesAndUsers())
    }, [dispatch])

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

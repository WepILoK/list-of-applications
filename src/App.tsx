import React from 'react';
import {Route, Switch, useHistory} from 'react-router-dom';
import {SideMenu} from "./components/SideMenu";
import {Header} from "./components/Header";
import {useStyles} from "./pages/theme";
import {ApplicationsList} from "./pages/ApplicationsList";

function App() {
    const classes = useStyles()
    const history = useHistory()
    console.log(history)
    return (
        <div className={classes.app}>
            <SideMenu/>
            <div>
                <Header/>
                <Switch>
                    {/*<Route path='/' component={Header} />*/}
                    {/*<ApplicationsList/>*/}
                    <Route path='/applications' component={ApplicationsList}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;

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
            {/*<Switch>*/}
            <SideMenu/>
            <div>
                <Header/>
                <ApplicationsList/>
                {/*<Route path='/home' component={ApplicationsList} />*/}

            </div>

            {/*</Switch>*/}
        </div>
    );
}

export default App;

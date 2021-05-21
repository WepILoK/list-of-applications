import React from 'react';
import {SideMenu} from "./components/SideMenu";
import {Grid} from "@material-ui/core";
import {Header} from "./components/Header";
import {useStyles} from "./pages/theme";
import {ApplicationsList} from "./pages/ApplicationsList";

function App() {
    const classes = useStyles()
  return (
    <div className={classes.app}>
        <Grid container spacing={3}>
            <Grid item xs={1}>
                <SideMenu/>
            </Grid>
            <Grid item xs={11}>
                <div>
                    <Header/>
                    <ApplicationsList/>
                </div>
            </Grid>
        </Grid>
    </div>
  );
}

export default App;

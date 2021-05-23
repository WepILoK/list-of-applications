import React from "react";
import {useStyles} from "./theme";

export const Clients: React.FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.pageTitle}>
            Клиенты
        </div>
    )
}
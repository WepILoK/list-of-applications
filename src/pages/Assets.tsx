import React from "react";
import {useStyles} from "./theme";

export const Assets: React.FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.pageTitle}>
            Активы
        </div>
    )
}
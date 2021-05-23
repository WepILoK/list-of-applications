import React from "react";
import {useStyles} from "./theme";

export const Staff: React.FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.pageTitle}>
            Сотрудники
        </div>
    )
}
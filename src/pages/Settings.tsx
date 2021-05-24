import React from "react";

import {useStyles} from "./theme";

export const Settings: React.FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.pageTitle}>
            Настройки
        </div>
    )
}
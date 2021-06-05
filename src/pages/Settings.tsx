import React from "react";

import {useStyles} from "../style";

export const Settings: React.FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.pageTitle}>
            Настройки
        </div>
    )
}
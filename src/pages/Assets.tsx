import React from "react";

import {useStyles} from "../style";


export const Assets: React.FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.pageTitle}>
            Активы
        </div>
    )
}
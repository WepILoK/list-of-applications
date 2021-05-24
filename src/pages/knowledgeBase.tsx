import React from "react";

import {useStyles} from "./theme";

export const KnowledgeBase: React.FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.pageTitle}>
            База знаний
        </div>
    )
}
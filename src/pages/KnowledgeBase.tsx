import React from "react";

import {useStyles} from "../style";

export const KnowledgeBase: React.FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.pageTitle}>
            База знаний
        </div>
    )
}
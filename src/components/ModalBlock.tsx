import React from "react";
import {useHistory} from "react-router-dom";

import {useStyles} from "../pages/theme";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';


interface IModelBlock {
    title: string
    name?: string
    children: React.ReactNode
}


export const ModalBlock: React.FC<IModelBlock> = ({name, children, title}) => {
    const classes = useStyles()
    const history = useHistory()

    const handleClose = (): void => {
        history.push('/applications')
    }

    return (
        <div className={classes.modalBlock}>
            <div className={classes.modalBlockHeader}>
                <div className={classes.modalBlockHeaderTitle}>
                    {title}
                </div>
                {name &&
                <div className={classes.modalBlockHeaderTitleName}>
                    {name}
                </div>
                }
                <div>
                    <IconButton
                        onClick={handleClose}
                        color='secondary'
                        arial-label='close'>
                        <CloseIcon style={{fontSize: 26}} color='secondary'/>
                    </IconButton>
                </div>
            </div>
            <div className={classes.modalBlockContent}>
                {children}
            </div>
        </div>
    )
}
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import CloseIcon from '@material-ui/icons/Close';
import {useStyles} from "../pages/theme";
import {CircularProgress} from "@material-ui/core";


interface IModelBlock {
    title: string
    name?: string
    onClose: () => void
    children: React.ReactNode
}

export const ModalBlock: React.FC<IModelBlock> = ({name, onClose, children, title}) => {
    const classes = useStyles()

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
                        onClick={onClose}
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
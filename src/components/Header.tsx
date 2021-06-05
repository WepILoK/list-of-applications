import React from "react";

import {useComponentStyles} from "./style";

import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";


export const Header: React.FC = () => {
    const classes = useComponentStyles()

    return (
        <div className={classes.header}>
            <OutlinedInput
                className={classes.headerSearch}
                id="outlined-adornment-amount"
                endAdornment={<InputAdornment position="end">
                    <IconButton type="submit" aria-label="search">
                        <SearchIcon/>
                    </IconButton>
                </InputAdornment>}/>
        </div>
    )
}
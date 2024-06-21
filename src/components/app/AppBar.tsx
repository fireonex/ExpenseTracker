import {AppBar, Toolbar, Typography} from "@mui/material";
import React from "react";
import {useStyles} from "../../utils/useStyles";

export const CustomAppBar = () => {

    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Expense Tracker
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
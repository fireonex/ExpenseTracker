import {AppListItem} from "./AppListItem";
import {Drawer} from "@mui/material";
import React from "react";
import {useStyles} from "../../utils/useStyles";

export const AppDrawer = () => {

    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.toolbar}/>
            <AppListItem/>
        </Drawer>
    )
}
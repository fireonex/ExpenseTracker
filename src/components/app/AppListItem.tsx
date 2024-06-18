import {List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";

export const AppListItem = () => {
    return (
        <List>
            <ListItem button>
                <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText primary="Home"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon><ListIcon/></ListItemIcon>
                <ListItemText primary="Transactions"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon><AccountCircleIcon/></ListItemIcon>
                <ListItemText primary="Profile"/>
            </ListItem>
        </List>
    )
}
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material/styles";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
    footer: {
        padding: theme.spacing(3),
        marginTop: 'auto',
        backgroundColor: theme.palette.background.paper,
    },
}));


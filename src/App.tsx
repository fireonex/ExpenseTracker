import React from 'react';
import {Container, CssBaseline, Typography} from '@mui/material';
import TransactionFormContainer from "./TransactionFormContainer";
import {useStyles} from "./utils/useStyles";
import {CustomAppBar} from "./components/app/AppBar";
// import {AppDrawer} from "./components/app/AppDrawer";
import {Footer} from "./components/app/Footer";


const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <CustomAppBar/>
            {/*<AppDrawer/>*/}
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Container>
                    <Typography paragraph>
                        <TransactionFormContainer/>
                    </Typography>
                </Container>
            </main>
            <Footer/>
        </div>
    );
};

export default App;

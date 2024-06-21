import React from "react";
import { Container, CssBaseline, Typography } from "@mui/material";
import TransactionFormContainer from "./TransactionFormContainer";
import { useStyles } from "./utils/useStyles";
import { CustomAppBar } from "./components/app/AppBar";
import { Footer } from "./components/app/Footer";
import {ParticlesComponent} from "./components/utils-components/ParticlesComponent";


const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <CustomAppBar/>
            <main className={classes.content}>
                <ParticlesComponent/>
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


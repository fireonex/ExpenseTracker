import {Box, Container, Typography} from "@mui/material";
import React from "react";
import {useStyles} from "../../utils/useStyles";

export const Footer = () => {

    const classes = useStyles();

    return (
        <Box component="footer" className={classes.footer}>
            <Container maxWidth="sm">
                <Typography variant="body1">Expense Tracker &copy; 2024</Typography>
            </Container>
        </Box>
    )
}
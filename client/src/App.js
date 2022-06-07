import { getPosts } from './actions/posts'
import { useDispatch } from "react-redux";
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import React, { useEffect, useState } from "react";
import scrolls from './images/reshape_emblem.png';
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import './styles.css'
import { useTheme } from '@emotion/react';
const App = () => {
    const { breakpoints } = useTheme;
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])
    return (
        <Container maxWidth="lg">
            <AppBar
                sx={{
                    borderRadius: 15,
                    margin: '30px 0',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                position="static" color="inherit">
                <Typography
                    sx={{
                        color: 'rgba(191, 85, 236, 1)'
                    }}
                    variant="h2" align="center">Scrolls</Typography>
                <img className="image" src={scrolls} alt="scrolls" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid sx={
                        theme => ({
                            [theme.breakpoints.down('sm')]: { flexDirection: "column-reverse" }

                        })
                    } container justify="space-between"
                        alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
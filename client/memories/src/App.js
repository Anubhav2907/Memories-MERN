import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grid, Grow } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts.js";
import memories from "./images/memories.png";
import Form from "./components/Form/Form.js";
import Posts from "./components/Posts/Posts.js";
import useStyles from "./styles.js";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memory"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}></Posts>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}></Form>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};
export default App;

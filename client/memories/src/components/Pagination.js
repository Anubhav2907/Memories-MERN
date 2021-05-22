import React from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import useStyles from "./styles.js";
import { Link } from "react-router-dom";
function Paginate() {
  const classes = useStyles();

  return (
    <Pagination
      variant="outlined"
      color="primary"
      classes={{ ul: classes.ul }}
      count={5}
      page={1}
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/posts?page=${1}`}
        ></PaginationItem>
      )}
    ></Pagination>
  );
}

export default Paginate;

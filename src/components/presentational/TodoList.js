import React from 'react';
import PropTypes from "prop-types";
import Todo from "./Todo";
import { List, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FilterSelector from "../container/FilterSelector";

const useStyle = makeStyles(() => ({
  root: {
    overflowY: "scroll",
    margin: "20px",
    marginTop: "30px"
  }
}));

function TodoList(props) {
  const { todoList, onTodoClick } = props;
  const classes = useStyle();

  return(
    <List className={classes.root}>
      {todoList.map((item, index) => {
        return (
          <Todo 
            key={index}
            todo={item}
            onTodoClick={() => { onTodoClick(item.id)}}
          />
        );
      })}
    </List>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    completed: PropTypes.bool,
    text: PropTypes.string
  })).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList;
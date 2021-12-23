import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";

const CustomColorCheckbox = withStyles({
    root: {
      color: "default",
      "&$checked": {
        color: "#13c552"
      }
    },
    checked: {}
})((props) => <Checkbox color="default" {...props} />);

function Todo({ todo, toggleComplete, removeTodo }) {
    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }
    function handleRemoveClick() {
        removeTodo (todo.id);
    }        

    return (
        <>
            <ListItem style={{ display: "flex" }}>
                <CustomColorCheckbox 
                    checked={todo.completed}
                    onClick={handleCheckboxClick} 
                />
                <Typography
                    variant="body1"
                    style={{
                      textDecoration: todo.completed ? "line-through" : null
                    }}
                >
                    {todo.task}
                </Typography>
                <IconButton onClick={handleRemoveClick}>
                    <CloseIcon />
                </IconButton>
            </ListItem>
        </>
    );
}

export default Todo;
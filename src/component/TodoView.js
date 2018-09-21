import React from "react";
import { observer }  from 'mobx-react';
import {Panel, Row, ControlLabel, Form, FormControl, Checkbox} from 'react-bootstrap';
import './Todo.css';

@observer
class TodoView extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            edit: false
        }
    }


    render() {
        const todo = this.props.todo;
        const handleEdit = this.handleTodoEdit.bind(this);
        const handleEditField = this.handleEditField.bind(this);
        const keyPress = this.onKeyPress.bind(this);

        let todo_content = [];
        if(this.state.edit){
            todo_content.push(
                <Form inline>
                    <ControlLabel htmlFor="task">Task title</ControlLabel>
                    <FormControl name="task" autoFocus onKeyDown={keyPress}
                       onChange={handleEditField}
                       value={todo.task}/>
                    <ControlLabel htmlFor="assignee">Assign to</ControlLabel>
                    <FormControl name="assignee" autoFocus onKeyDown={keyPress}
                         onChange={handleEditField}
                         value={todo.assignee}/>
                </Form>);

        }else{
            let label = todo.task
            todo_content.push(
                <div className="Todo-item">
                    <Checkbox
                        checked={ todo.completed }
                        onChange={ this.onToggleCompleted }>
                        {label}
                    </Checkbox>
                </div>
                );
            if(todo.assignee)
                todo_content.push(<small><i className="Todo-assignee"> Assigned to {todo.assignee} </i></small>)
        }
        return (
            <div onDoubleClick={handleEdit}>
                {todo_content}
            </div>
        );
    }

    onToggleCompleted = () => {
        const todo = this.props.todo;
        todo.completed = !todo.completed;
    }

    handleTodoEdit = () => {
        this.setState({
            edit: !this.state.edit
        });
    }

    onKeyPress = (e) => {
        if(e.keyCode == 13)
            this.handleTodoEdit()
    }

    handleEditField = (e) => {
        const todo = this.props.todo;
        todo[e.target.name] = e.target.value;
        console.log(e.target.name)
        console.log(e.target.value)
    }

}

@observer
export default class TodoList extends React.Component {
    render() {
        const store = this.props.store;
        return (
            <Panel>
                <Panel.Heading>
                    <Panel.Title componentClass="h3"><span>My todo list</span></Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                { store.todos.map(
                    (todo, index) => <TodoView todo={ todo } key={index} />
                 ) }
                </Panel.Body>
            </Panel>
        );
    }
}
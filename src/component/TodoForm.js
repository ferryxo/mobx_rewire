import React from 'react'
import {Col, Button, Form, FormGroup, ControlLabel, FormControl, Panel} from 'react-bootstrap'

export default class TodoForm extends React.Component{
    constructor() {
        super();

        this.state = {
            todoField : ''
        };

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.onTextFieldChange = this.onTextFieldChange.bind(this);
        this.keyPress = this.onKeyPress.bind(this);

    }

    render() {

        return(
            <Panel>
                <Panel.Heading>
                    <Panel.Title componentClass="h3"><span>Todo Form</span></Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                <Form horizontal>
                    <FormGroup>
                        <Col sm={2}>
                            <h4>Add Todo</h4>
                        </Col>
                        <Col sm={10}>
                            <FormControl
                                type='text'
                                id='todo'
                                value = {this.state.todoField}
                                onKeyDown={this.keyPress}
                                onChange={this.onTextFieldChange}
                             />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type='button' bsStyle="primary" onClick={this.handleButtonClick}>add todo</Button>
                        </Col>
                    </FormGroup>
                </Form>
                </Panel.Body>
            </Panel>
        );
    }

    onKeyPress = (e) => {
        if(e.keyCode == 13)
            this.handleButtonClick();
    }

    onTextFieldChange(e){
        if(e.target !== undefined){
            this.setState({
                todoField : e.target.value
            });
        }
    }

    handleButtonClick(){
        this.props.store.addTodo(this.state.todoField);
        this.setState({
            todoField : ''
        });
    }

}
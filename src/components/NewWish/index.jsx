import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import './style.css'

class NewWish extends Component{
    emptyItem = {
        nazevPrani: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
   
    }

    render(){
        const {item} = this.state;
        return(
            <div className="new_wish_container">
            <Container>
                <h2 className="new_with_font">Přidat přání</h2>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="nazevPrani" className="new_with_font">Název přání</Label>
                        <Input type="text" name="nazevPrani" id="nazevPrani" value={item.nazevPrani || ''}
                               onChange={this.handleChange} autoComplete="name"/>
                    </FormGroup>
            
                    <FormGroup>
                        <Button  className="btn btn-light" type="submit">Save</Button>{' '}
                        <Button className="btn btn-light"><Link to="/">Cancel</Link></Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
        )
    }
}

export default NewWish;
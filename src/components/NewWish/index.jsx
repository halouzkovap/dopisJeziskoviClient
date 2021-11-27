import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState( {item:{nazevPrani:event.target.value}});
    }

    async handleSubmit(event) {
        event.preventDefault();
        await fetch(`https://vanoceb.azurewebsites.net/pridat-prani`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.item)
        })
        window.location="/"
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
                        <Input type="text" name="nazevPrani" id="nazevPrani" value={this.state.item.nazevPrani}
                               onChange={this.handleChange} autoComplete="nazevPrani"/>
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
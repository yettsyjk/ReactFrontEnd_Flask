import React, { Component } from 'react';
import { Form, Button, Header, Modal } from 'semantic-ui-react';

class CreateFreight extends Component {
    constructor() {
        super();

        //utilize the model from Flask back-end
        this.state = {
            name: '',
            cost_of_load: '',
            trucking_company: '',
            bol_number: '',
            travel_days_required: '',
            estimated_date_arrival: '',
            point_of_contact: '',
            num_of_pallets: '',
            originating_port: '',
            recent_terminal: '',
            date_last_terminal: ''
        }
    }
    //function for handleChange
    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    //function for clearForm
    clearForm = () => {
        this.setState({
            name: '',
            cost_of_load: '',
            trucking_company: '',
            bol_number: '',
            travel_days_required: '',
            estimated_date_arrival: '',
            point_of_contact: '',
            num_of_pallets: '',
            originating_port: '',
            recent_terminal: '',
            date_last_terminal: ''
        })
    }

    render() {
        return (
            <Modal open={this.props.open} closeIcon onClose={this.props.closeModal}>
                <Header>New Inbound Freight</Header>
                <Modal.Content>
                    <Form
                        size='large'
                        onSubmit={(e) => this.props.addFreight(e, this.state)}
                    >
                        <Form.Field>
                            <lable>Load Name</lable>
                            <Form.Input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Button className="inbound_button" type='submit'>Submit</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        )
    }
}

export default CreateFreight;

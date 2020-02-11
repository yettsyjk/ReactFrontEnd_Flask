import React, { Component } from 'react';


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

    //function for clearForm has mutable state attributes, setState will immute the following attributes
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
            <div className="container">
                <div className="row">
                    <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">   
                            <header>New Inbound Freight</header>
                            <input className="validate" placeholder="Placeholder" id="load_name" type="text"></input>
                            <label for="load_name">Load Name</label>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateFreight;

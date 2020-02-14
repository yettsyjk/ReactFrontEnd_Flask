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
                    <div className="card-content">
                    <header className="black-text">Create Freight Container</header><br/>
                    <form className="col s12 m7" onSubmit={this.addFreight}>
                            <label for="load_name">Load Name</label>
                            <input placeholder="load_name" name="name" type="text" value={this.state.name} onChange={this.handleChange}></input>
                            <br/>
                            <label for="cost_of_load">cost_of_load</label>
                            <input placeholder="cost_of_load" name="cost_of_load" type="text" value={this.state.cost_of_load} onChange={this.handleChange}></input>
                            <br/>
                            <label for="trucking_company">trucking_company</label>
                            <input placeholder="trucking_company" name="trucking_company" type="text" value={this.state.trucking_company} onChange={this.handleChange}></input>
                            <br/>
                            <label for="bol_number">bol_number</label>
                            <input placeholder="bol_number" name="bol_number" type="text" value={this.state.bol_number} onChange={this.handleChange}></input>
                            <br/>
                            <label for="travel_days_required">travel_days_required</label>
                            <input placeholder="travel_days_required" name="travel_days_required" type="text" value={this.state.travel_days_required} onChange={this.handleChange}></input>
                            <br/>
                            <label for="estimated_date_arrival">estimated_date_arrival</label>
                            <input placeholder="estimated_date_arrival" name="estimated_date_arrival" type="text" value={this.state.estimated_date_arrival} onChange={this.handleChange}></input>
                            <br/>
                            <label for="point_of_contact">point_of_contact</label>
                            <input placeholder="point_of_contact" name="point_of_contact" type="text" value={this.state.point_of_contact} onChange={this.handleChange}></input>
                            <br/>
                            <label for="num_of_pallets">num_of_pallets</label>
                            <input placeholder="num_of_pallets" name="num_of_pallets" type="text" value={this.state.num_of_pallets} onChange={this.handleChange}></input>
                            <br/>
                            <label for="originating_port">originating_port</label>
                            <input placeholder="originating_port" name="originating_port" type="text" value={this.state.originating_port} onChange={this.handleChange}></input>
                            <br/>
                            <label for="recent_terminal">recent_terminal</label>
                            <input placeholder="recent_terminal" name="recent_terminal" type="text" value={this.state.recent_terminal} onChange={this.handleChange}></input>
                            <br/>
                            <label for="date_last_terminal">date_last_terminal</label>
                            <input placeholder="date_last_terminal" name="date_last_terminal" type="text" value={this.state.date_last_terminal} onChange={this.handleChange}></input>
                            <br/>
                        <button className="btn" type="submit"><i className="material-icons right">local_shipping</i>
                            Create Frieght Container
                        </button> 
                      
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateFreight;

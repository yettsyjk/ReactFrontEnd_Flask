import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import FreightList from '../components/FreightList'

class FreightContainer extends Component {
    state = {
        products: [],
        productToCreate: {
            load_name: '',
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

    //function for handleEditChange is required for form that is being submitted to return an object
    handleEditChange = (event) => {
        //implementation to state productToCreate
        this.setState({
            productToCreate: {
                ...this.state.productToCreate,
                [event.target.name]: event.target.value
            }
        })
        console.log('productToCreate handleEditChange');
    }

    //function for addFreight
    addFreight = async (e) => {
        e.preventDefault();
        //in console: user should see the object that was created 
        console.log(this.state.productToCreate)
        try {

            const createFreightResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/products/`, {
                //method must match flask back-end create route 
                method: 'POST',
                body: JSON.stringify(this.state.productToCreate),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });

            const parsedResponse = await createFreightResponse.json();
            //in console: user should see the object created and status code 201 from flask back-end create route
            console.log('parsedResponse point', parsedResponse)

            this.setState({
                products: [...this.state.products, parsedResponse.data]
            })

        } catch (err) {
            console.log('addFreight Error:', err)
        }
    }

    //function for getFreight async request that returns a promise activated by fetch
    getFreight = async () => {
        try {
            const products = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/products/`, {
                credentials: 'include'
            });
            const parsedProducts = await products.json();
                // console.log(parsedProducts, 'line74')
            this.setState({
                products: parsedProducts.data
            })
        } catch (err) {
            console.log('getFreight error:', err)
        }
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

    //function for componentDidMount
    //we only want to fetch data one time when the component mounts
    componentDidMount() {
        this.getFreight()
       
        // console.log('FreightContainer getFreight componentDidMount')
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="card-content black-text">
                            <header>New Inbound Freight</header><br />
                            <form className="col" onSubmit={this.addFreight}>

                                <label className="black-text" for="load_name">Load Name</label>
                                <input placeholder="load_name" name="load_name" type="text" value={this.state.productToCreate.name} onChange={this.handleEditChange}></input>
                                <br />
                                <label className="black-text" for="cost_of_load">cost_of_load</label>
                                <input placeholder="cost_of_load" name="cost_of_load" type="text" value={this.state.productToCreate.cost_of_load} onChange={this.handleEditChange}></input>
                                <br />
                                <label className="black-text" for="trucking_company">trucking_company</label>
                                <input placeholder="trucking_company" name="trucking_company" type="text" value={this.state.productToCreate.trucking_company} onChange={this.handleEditChange}></input>
                                <br />
                                <label className="black-text" for="bol_number">bol_number</label>
                                <input placeholder="bol_number" name="bol_number" type="text" value={this.state.productToCreate.bol_number} onChange={this.handleEditChange}></input>
                                <br />
                                <label className="black-text" for="travel_days_required">travel_days_required</label>
                                <input placeholder="travel_days_required" name="travel_days_required" type="text" value={this.state.productToCreate.travel_days_required} onChange={this.handleEditChange}></input>
                                <br />
                                <label className="black-text" for="estimated_date_arrival">estimated_date_arrival</label>
                                <input placeholder="estimated_date_arrival" name="estimated_date_arrival" type="text" value={this.state.productToCreate.estimated_date_arrival} onChange={this.handleEditChange}></input>
                                <br />
                                <label className="black-text" for="point_of_contact">point_of_contact</label>
                                <input placeholder="point_of_contact" name="point_of_contact" type="text" value={this.state.productToCreate.point_of_contact} onChange={this.handleEditChange}></input>
                                <br />
                                <label className="black-text" for="num_of_pallets">num_of_pallets</label>
                                <input placeholder="num_of_pallets" name="num_of_pallets" type="text" value={this.state.productToCreate.num_of_pallets} onChange={this.handleEditChange}></input>
                                <br />
                                <label className="black-text" for="originating_port">originating_port</label>
                                <input placeholder="originating_port" name="originating_port" type="text" value={this.state.productToCreate.originating_port} onChange={this.handleEditChange}></input>
                                <br />
                                <label className="black-text" for="recent_terminal">recent_terminal</label>
                                <input placeholder="recent_terminal" name="recent_terminal" type="text" value={this.state.productToCreate.recent_terminal} onChange={this.handleEditChange}></input>
                                <br />
                                <label className="black-text" for="date_last_terminal">date_last_terminal</label>
                                <input placeholder="date_last_terminal" name="date_last_terminal" type="text" value={this.state.productToCreate.date_last_terminal} onChange={this.handleEditChange}></input>
                                <br />

                                <button className="btn waves-effect waves-light" type="submit"><i className="material-icons right">local_shipping</i>
                                    Create New Inbound Freight
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <div className="z-depth-3">
                       <Link className="btn" to="/product/:id"> <FreightList
                            products={this.state.products}
                            {...this.props}
                        />
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FreightContainer

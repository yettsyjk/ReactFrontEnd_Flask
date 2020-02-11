import React, { Component } from 'react'

import CreateFreight from './CreateFreight'
import EditFreight from './EditFreight'
import FreightList from './FreightList'

class FreightContainer extends Component {
    state = {
        products: [],
        productToCreate: {
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
       handleEditChange = (event) => {
        //implementation to state productToCreate
        this.setState({
            productToCreate: {
                ...this.state.productToCreate,
                [event.target.name]: event.target.value
            }
        })
    }
    //function for addFreight
    addFreight = async (e) => {
        e.preventDefault();
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
            const products = await fetch(`http://localhost:8000/api/v1/products/`, {
                credentials: 'include'
            });
            const parsedProducts = await products.json();

            this.setState({
                products: parsedProducts.data
            })
        } catch (err) {
            console.log('error:', err)
        }
    }

    //function for editFreight
    editFreight = (idOfProductToEdit) => {
        const productToEdit = this.state.products.find(product => product.id === idOfProductToEdit)
        this.setState({
            productToEdit: {
                ...productToEdit
            }
        })
    }

    //function for handleEditChange
 

    //function for updateFreight async allows time to go to Flask back-end and return to render
    updateFreight = async (e) => {
        //avoid browser re-render with preventDefault() for the event
        e.preventDefault()
        //try catch for response 
        try {
            //await the async function hard code localhost and replace with ${process.env.REACT_APP_API_URL}
            const updateResponse = await fetch(`http://localhost:8000/api/v1/products/${this.state.productToEdit.id}`, {
                //method must match flask back-end update route 
                method: 'PUT',
                //payload will be returned from back-end as jsonify data
                body: JSON.stringify(this.state.productToEdit),
                headers: {
                    'Content-Type': 'application/json'
                },
                //this portion is more for authentication purpose to verify credentials from back-end allows update data
                credentials: 'include'
            })
            const updateResponseParsed = await updateResponse.json()
            //products are used as blueprint in Flask back-end and must be consistent when mapping through the each array element 
            const newFreightArrayWithUpdate = this.state.products.map((product) => {
                if (product.id === updateResponseParsed.data.id) {
                    product = updateResponseParsed.data
                }
                return product
            })
            //call this.setState inside 
            this.setState({
                products: newFreightArrayWithUpdate
            })

        } catch (err) {
            console.log(err)
        }
    }

    //function for deleteFreight
    deleteFreight = async (id) => {
        const deleteFreightResponse = await fetch(`http://localhost:8000/api/v1/products/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        });

        await deleteFreightResponse.json();

        this.setState({
            products: this.state.products.filter((product) => product.id !== id)
        })
    }

    //function for componentDidMount
    //we only want to fetch data one time when the component mounts
    componentDidMount() {
        console.log('componentDidMount')
    }

    render() {
        return (
            <div className="container">
                {/* <div className="row">
                    <div className="col s12">
                        <h1>Freight Tracking System</h1>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col s12">
                    <header>New Inbound Freight</header>
                    <form className="col" onSubmit={this.addFreight}>
                    {/* <div className="row">
                        <div className=" col s6">    */}
                            <label for="load_name">Load Name</label>
                            <input placeholder="load_name" name="name" type="text" value={this.state.productToCreate.name} onChange={this.handleEditChange}></input>
                            <br/>
                            <label for="cost_of_load">cost_of_load</label>
                            <input placeholder="cost_of_load" name="cost_of_load" type="text" value={this.state.productToCreate.cost_of_load} onChange={this.handleEditChange}></input>
                            <br/>
                            <label for="trucking_company">trucking_company</label>
                            <input placeholder="trucking_company" name="trucking_company" type="text" value={this.state.productToCreate.trucking_company} onChange={this.handleEditChange}></input>
                            <br/>
                            <label for="bol_number">bol_number</label>
                            <input placeholder="bol_number" name="bol_number" type="text" value={this.state.productToCreate.bol_number} onChange={this.handleEditChange}></input>
                            <br/>
                            <label for="travel_days_required">travel_days_required</label>
                            <input placeholder="travel_days_required" name="travel_days_required" type="text" value={this.state.productToCreate.travel_days_required} onChange={this.handleEditChange}></input>
                            <br/>
                            <label for="estimated_date_arrival">estimated_date_arrival</label>
                            <input placeholder="estimated_date_arrival" name="estimated_date_arrival" type="text" value={this.state.productToCreate.estimated_date_arrival} onChange={this.handleEditChange}></input>
                            <br/>
                            <label for="point_of_contact">point_of_contact</label>
                            <input placeholder="point_of_contact" name="point_of_contact" type="text" value={this.state.productToCreate.point_of_contact} onChange={this.handleEditChange}></input>
                            <br/>
                            <label for="num_of_pallets">num_of_pallets</label>
                            <input placeholder="num_of_pallets" name="num_of_pallets" type="text" value={this.state.productToCreate.num_of_pallets} onChange={this.handleEditChange}></input>
                            <br/>
                            <label for="originating_port">originating_port</label>
                            <input placeholder="originating_port" name="originating_port" type="text" value={this.state.productToCreate.originating_port} onChange={this.handleEditChange}></input>
                            <br/>
                            <label for="recent_terminal">recent_terminal</label>
                            <input placeholder="recent_terminal" name="recent_terminal" type="text" value={this.state.productToCreate.recent_terminal} onChange={this.handleEditChange}></input>
                            <br/>
                            <label for="date_last_terminal">date_last_terminal</label>
                            <input placeholder="date_last_terminal" name="date_last_terminal" type="text" value={this.state.productToCreate.date_last_terminal} onChange={this.handleEditChange}></input>
                            <br/>

                        <button className="btn" type="submit"><i className="material-icons right">local_shipping</i>
                            Create New Inbound Freight
                        </button> 
                    </form>
                   


                        
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <h5>Freight List Container</h5>
                        <FreightList
                            products={this.state.products}
                            deleteFreight={this.deleteFreight}
                            editFreight={this.editFreight}
                        />
                    </div>
                    <div className="col s6">
                        <CreateFreight
                            addFreight={this.addFreight}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <EditFreight
                            updateFreight={this.updateFreight}
                            productToCreate={this.state.productToCreate}
                            handleEditChange={this.handleEditChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default FreightContainer

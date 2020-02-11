import React, { Component } from 'react'

import CreateFreight from './CreateFreight'
import EditFreight from './EditFreight'
import FreightList from './FreightList'

class FreightContainer extends Component {
    state = {
        products: [],
        productToEdit: {
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
            date_last_terminal: '',
            id: ''
        }
    }

    //function for addFreight
    addFreight = async (e, productFromTheForm) => {
        e.preventDefault();

        try {
            const createFreightResponse = await fetch(`http://localhost:8000/api/v1/products/`, {
                //method must match flask back-end create route 
                method: 'POST',
                body: JSON.stringify(productFromTheForm),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });

            const parsedResponse = await createFreightResponse.json();
            console.log('parsedResponse point')

            this.setState({
                products: [...this.state.products, parsedResponse.data]
            })

        } catch (err) {
            console.log('error:', err)
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
    handleEditChange = (event) => {
        //implementation to state productToEdit
        this.setState({
            productToEdit: {
                ...this.state.productToEdit,
                [event.target.name]: event.target.value
            }
        })
    }

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
        this.getFreight();
        console.log('componentDidMount')
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h1>Freight Tracking System</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button className="btn" type="submit" onClick={this.addFreight}>
                            <i className="material-icons right">local_shipping</i>
                            Create New Inbound Freight
                        </button>
                    </div>
                </div>
                <div className="row">
                    {/* <div className="col s6">
                        <h5>Freight List Container</h5>
                        <FreightList
                            products={this.state.products}
                            deleteFreight={this.deleteFreight}
                            editFreight={this.editFreight}
                        />
                    </div> */}
                    {/* <div className="col s6">
                        <CreateFreight
                            addFreight={this.addFreight}
                        />
                    </div> */}
                </div>
                {/* <div className="row">
                    <div className="col s12">
                        <EditFreight
                            updateFreight={this.updateFreight}
                            productToEdit={this.state.productToEdit}
                            handleEditChange={this.handleEditChange}
                        />
                    </div>
                </div> */}
            </div>
        )
    }
}

export default FreightContainer

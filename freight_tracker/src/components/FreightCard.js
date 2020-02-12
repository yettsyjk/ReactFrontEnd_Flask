import React, { Component } from 'react'

class FreightCard extends Component {
    state = {
        disabled: true,
        product: {}
    }

    //function for handleEditChange is required for form that is being submitted to return an object
    handleChange = (event) => {
        const { product } = this.state

        this.setState({
            product: {
                ...product,
                [event.target.name]: event.target.value
            }
        })
    }

    //function for editFreight
    editForm = () => {
        this.setState({
            disabled: false,
            product: this.state
        })
    }
    //updateResponse will have to await fetch response to include product.id and return product
    //function for updateFreight async allows time to go to Flask back-end and return to render
    updateFreight = async (e) => {
        //avoid browser re-render with preventDefault() for the event
        e.preventDefault()
        //try catch for response 
        try {
            //await the async function testing hard code localhost and replace with ${process.env.REACT_APP_API_URL}
            const updateResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/products/${product.id}`, {
                //method must match flask back-end update route 
                method: 'PUT',
                //payload will be returned from back-end as jsonify data
                body: JSON.stringify(product),
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
        const deleteFreightResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/products/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        });

        await deleteFreightResponse.json();

        this.setState({
            products: this.state.products.filter((product) => product.id !== id)
        })
    }

    componentDidMount() {
        const { product } = this.props

        this.setState({
            product: product
        })
    }

    render() {
        const {
            disabled,
            product
        } = this.state

        return (
            < form className="col s12 l6" >
                <div className="card">
                    <div className="card-content">
                        <header>Freight Card</header>
                        <label className="black-text" for="load_name">Load Name</label>
                        <input disabled={disabled} name="name" type="text" value={product.name} onChange={this.handleChange}></input>
                        <br />
                        <label for="cost_of_load">cost_of_load</label>
                        <input disabled={disabled} name="cost_of_load" type="text" value={product.cost_of_load} onChange={this.handleChange}></input>
                        <br />
                        <label for="trucking_company">trucking_company</label>
                        <input disabled={disabled} name="trucking_company" type="text" value={product.trucking_company} onChange={this.handleChange}></input>
                        <br />
                        <label for="bol_number">bol_number</label>
                        <input disabled={disabled} name="bol_number" type="text" value={product.bol_number} onChange={this.handleChange}></input>
                        <br />
                        <label for="travel_days_required">travel_days_required</label>
                        <input disabled={disabled} name="travel_days_required" type="text" value={product.travel_days_required} onChange={this.handleChange}></input>
                        <br />
                        <label for="estimated_date_arrival">estimated_date_arrival</label>
                        <input disabled={disabled} name="estimated_date_arrival" type="text" value={product.estimated_date_arrival} onChange={this.handleChange}></input>
                        <br />
                        <label for="point_of_contact">point_of_contact</label>
                        <input disabled={disabled} name="point_of_contact" type="text" value={product.point_of_contact} onChange={this.handleChange}></input>
                        <br />
                        <label for="num_of_pallets">num_of_pallets</label>
                        <input disabled={disabled} name="num_of_pallets" type="text" value={product.num_of_pallets} onChange={this.handleChange}></input>
                        <br />
                        <label for="originating_port">originating_port</label>
                        <input disabled={disabled} name="originating_port" type="text" value={product.originating_port} onChange={this.handleChange}></input>
                        <br />
                        <label for="recent_terminal">recent_terminal</label>
                        <input disabled={disabled} name="recent_terminal" type="text" value={product.recent_terminal} onChange={this.handleChange}></input>
                        <br />
                        <label for="date_last_terminal">date_last_terminal</label>
                        <input disabled={disabled} name="date_last_terminal" type="text" value={product.date_last_terminal} onChange={this.handleChange}></input>
                        <br />

                        {/* <span className="card-title black-text center-align">Load Name: {product.name}</span>
                            <p className="center-align">Cost of Load: { product.cost_of_load}</p>
                            <br/>
                            <p className="center-align">Trucking Co: {product.trucking_company}</p>
                            <br/>
                            <p className="center-align">BOL: {product.bol_number}</p>
                            <br/>
                            <p className="center-align">Travel Days Req: {product.travel_days_required}</p>
                            <br/>
                            <p className="center-align">Date of Arrival: {product.estimated_date_arrival}</p>
                            <br/>
                            <p className="center-align">POC: {product.point_of_contact}</p>
                            <br/>
                            <p className="center-align">Num. of Pallets: {product.num_of_pallets}</p>
                            <br/>
                            <p className="center-align">Coming from: {product.originating_port}</p>
                            <br/>
                            <p className="center-align">Last Terminal: {product.recent_terminal}</p>
                            <br/>
                            <p className="center-align">Date of last terminal: {product.date_last_terminal}</p>
                            <br/> */}
                        <div className="card-action">
                            <button className="btn" onClick={() => this.editForm()}>
                                <i className="material-icons left">create</i>
                                Edit Freight Item
                            </button>
                            <br />
                            <button className="btn" onClick={() => props.updateFreight(product.id)}>
                                <i className="material-icons left">grain</i>
                                Update Freight Item
                            </button>
                            <br />
                            <button className="btn" onClick={() => props.deleteFreight(product.id)}>
                                <i className="material-icons left">highlight_off</i>
                                Delete Freight Item
                            </button>
                        </div>
                    </div>
                </div>
            </form >
        )














    }
}

export default FreightCard

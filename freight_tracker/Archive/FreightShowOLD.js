import React, { Component } from 'react'
import FreightList from './FreightList'



class FreightShow extends Component {
    state = {
        disabled: true,
        product: {}
    }
    
    //deconstruct products from state to render cetrain attributes
    render() {
        const { product,
                disabled
             } = this.state
        console.log(disabled)
        return (
            <div className="container">
            <div className="row">
                <div className="col s12 center-align">
                    <div className="card-content" key={product.id}>
                    </div>
                       
                        <img src="https://img.icons8.com/office/2x/interstate-truck.png" alt="Freight tracker company logo truck for shipping"></img>
                        <p className="card-title">Inbound Load Name: {product.load_name}</p>
                        <br />
                        <FreightList
                        products={this.state.products}
                        {...this.props}
                        />
                        {/* <label className="black-text" for="cost_of_load">cost_of_load</label>
                        <input disabled={disabled} name="cost_of_load" type="text" value={product.cost_of_load} ></input>
                        <br />
                        <label className="black-text" for="trucking_company">trucking_company</label>
                        <input disabled={disabled} name="trucking_company" type="text" value={product.trucking_company} ></input>
                        <br />
                        <label className="black-text" for="bol_number">bol_number</label>
                        <input disabled={disabled} name="bol_number" type="text" value={product.bol_number} ></input>
                        <br />
                        <label className="black-text" for="travel_days_required">travel_days_required</label>
                        <input disabled={disabled} name="travel_days_required" type="text" value={product.travel_days_required} ></input>
                        <br />
                        <label className="black-text" for="estimated_date_arrival">estimated_date_arrival</label>
                        <input disabled={disabled} name="estimated_date_arrival" type="text" value={product.estimated_date_arrival} ></input>
                        <br />
                        <label className="black-text" for="point_of_contact">point_of_contact</label>
                        <input disabled={disabled} name="point_of_contact" type="text" value={product.point_of_contact} ></input>
                        <br />
                        <label className="black-text" for="num_of_pallets">num_of_pallets</label>
                        <input disabled={disabled} name="num_of_pallets" type="text" value={product.num_of_pallets} ></input>
                        <br />
                        <label className="black-text" for="originating_port">originating_port</label>
                        <input disabled={disabled} name="originating_port" type="text" value={product.originating_port} ></input>
                        <br />
                        <label className="black-text" for="recent_terminal">recent_terminal</label>
                        <input disabled={disabled} name="recent_terminal" type="text" value={product.recent_terminal} ></input>
                        <br />
                        <label className="black-text" for="date_last_terminal">date_last_terminal</label>
                        <input disabled={disabled} name="date_last_terminal" type="text" value={product.date_last_terminal} ></input>
                        <br /> */}
                        </div>
                </div>
            </div>  
        )
    }
}


export default FreightShow;
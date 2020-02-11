import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class FreightShow extends Component {
    state = {
        products: false
    }
    //deconstruct products from state to render cetrain attributes
    render() {
        const { products } = this.state
        return (
            <div className="row">
                <div className="col s12 m7">
                    <div className="card">
                    <span className="card-content">key={this.props.product.id}</span>
                    </div>
                        <div className="card-image">
                        <img src="../public/favicon-32x32.png" alt="Freight tracker company logo truck for shipping"></img>
                        <span className="card-title">Load Name: {products.name}</span>
                        </div>
                            <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                            </div>
                                <div className="card-action">
                                    <Link to="/">This is a link</Link>
                                    <button className="btn-flat" onClick={() => this.props.deleteFreight(this.props.product.id)}>Delete Freight Load</button>
                                    <button className="btn-flat" onClick={() => this.props.editFright(this.props.product.id)}>Edit Freight Load</button>
                                </div>
                </div>
            </div>  
        )
    }
}


export default FreightShow;
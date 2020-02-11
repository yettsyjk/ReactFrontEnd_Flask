import React from 'react';


function FreightList(props) {
    console.log(props)
    const { products } = props

    const freightList = products && products.map((product) => {
        return (
            <div className="col s12">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title black-text">Load Name: {product.name}</span>
                        <p className="black-text">{ "black-text"roduct.cost_of_load}</p>
                        <br/>
                        <p className="black-text">{product.trucking_company}</p>
                        <br/>
                        <p className="black-text">{product.bol_number}</p>
                        <br/>
                        <p className="black-text">{product.travel_days_required}</p>
                        <br/>
                        <p className="black-text">{product.estimated_date_arrival}</p>
                        <br/>
                        <p className="black-text">{product.point_of_contact}</p>
                        <br/>
                        <p className="black-text">{product.num_of_pallets}</p>
                        <br/>
                        <p className="black-text">{product.originating_port}</p>
                        <br/>
                        <p className="black-text">{product.recent_terminal}</p>
                        <br/>
                        <p className="black-text">{product.date_last_terminal}</p>
                        <br/>
                    </div>
                    <div className="card-action">
                        <button className="btn-flat" onClick={() => props.editFreight(product.id)}>
                            <i className="material-icons left">create</i>
                            Edit Freight Item
                        </button>
                        <br />
                        <button className="btn-flat" onClick={() => props.updateFreight(product.id)}>
                            <i className="material-icons left">grain</i>
                            Update Freight Item
                        </button>
                        <br />
                        <button className="btn-flat" onClick={() => props.deleteFreight(product.id)}>
                            <i className="material-icons left">highlight_off</i>
                            Delete Freight Item
                        </button>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="row">
            {freightList}
        </div>
    )
}

export default FreightList;
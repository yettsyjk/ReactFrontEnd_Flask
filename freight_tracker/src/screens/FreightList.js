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
                        <p>Extra details could go here...</p>
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
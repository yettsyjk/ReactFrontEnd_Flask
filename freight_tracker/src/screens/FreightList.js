import React from 'react';


function FreightList(props){
    console.log(props)
    const { products } = props

    const freightList = products && products.map((product) => {
        return (
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                <h5 className="col s12 m6">Freight List Container</h5></span>
                <div className="card" key={product.id}>
                    <div className="card-content">
                        <header className="load-header">Load Name: {product.name}</header>
                    </div>
                    <div className="card-content" extra>
                        <button className="waves-effect waves-light btn-flat" onClick={() => props.editFreight(product.id)}><i className="material-icons left">create</i>Edit Freight Item</button>
                        <button className="waves-effect waves-light btn-flat" onClick={() => props.updateFreight(product.id)}><i className="material-icons left">grain</i>Update Freight Item</button>
                        <button className="waves-effect waves-light btn-flat" onClick={() => props.deleteFreight(product.id)}><i className="material-icons left">highlight_off</i>Delete Freight Item</button>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="card-group" centered>
            {freightList}
        </div>
    )
}

export default FreightList;
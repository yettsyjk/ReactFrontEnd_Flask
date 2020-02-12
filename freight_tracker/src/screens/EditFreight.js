import React from 'react'

//create functional component to destructure props for productToCreate
const EditFreight= (props)=> {
    const {
      products,
      handleEditChange,
    } = props
    //Form, Button, Header, Modal from semantic-ui-react
    //state not available do not use state or this
    return (
        <div class="row">
      <div className="card-content">
    <form class="col s12">
      <div class="row">
        <div class="col s12 m7">
          <header className="black-text">Edit Freight Container</header><br/>
                            <label for="load_name">Load Name</label>
                            <input placeholder="load_name" name="name" type="text" value={props.productToCreate.name} onChange={handleEditChange}></input>
                            <br/>
                            <label for="cost_of_load">cost_of_load</label>
                            <input placeholder="cost_of_load" name="cost_of_load" type="text" value={props.productToCreate.cost_of_load}></input>
                            <br/>
                            <label for="trucking_company">trucking_company</label>
                            <input placeholder="trucking_company" name="trucking_company" type="text" value={props.productToCreate.trucking_company}></input>
                            <br/>
                            <label for="bol_number">bol_number</label>
                            <input placeholder="bol_number" name="bol_number" type="text" value={props.productToCreate.bol_number}></input>
                            <br/>
                            <label for="travel_days_required">travel_days_required</label>
                            <input placeholder="travel_days_required" name="travel_days_required" type="text" value={props.productToCreate.travel_days_required}></input>
                            <br/>
                            <label for="estimated_date_arrival">estimated_date_arrival</label>
                            <input placeholder="estimated_date_arrival" name="estimated_date_arrival" type="text" value={props.productToCreate.estimated_date_arrival}></input>
                            <br/>
                            <label for="point_of_contact">point_of_contact</label>
                            <input placeholder="point_of_contact" name="point_of_contact" type="text" value={props.productToCreate.point_of_contact}></input>
                            <br/>
                            <label for="num_of_pallets">num_of_pallets</label>
                            <input placeholder="num_of_pallets" name="num_of_pallets" type="text" value={props.productToCreate.num_of_pallets}></input>
                            <br/>
                            <label for="originating_port">originating_port</label>
                            <input placeholder="originating_port" name="originating_port" type="text" value={props.productToCreate.originating_port}></input>
                            <br/>
                            <label for="recent_terminal">recent_terminal</label>
                            <input placeholder="recent_terminal" name="recent_terminal" type="text" value={props.productToCreate.recent_terminal}></input>
                            <br/>
                            <label for="date_last_terminal">date_last_terminal</label>
                            <input placeholder="date_last_terminal" name="date_last_terminal" type="text" value={props.productToCreate.date_last_terminal}></input>
                            <br/>



            <button className="btn" type="submit">Create Freight Load</button>
        </div>
        </div>
    </form>
  </div>
  </div>
    )
}

export default EditFreight;
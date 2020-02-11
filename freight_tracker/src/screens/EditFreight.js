import React from 'react'

//create functional component to return Modal attributes
function EditFreight(props) {
    //Form, Button, Header, Modal from semantic-ui-react
    //state not available do not use state or this
    return (
        <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input placeholder="Load Name.." id="load_name" type="text" class="validate"></input>
          <label value={props.productToEdit.name} onChange={props.handleEditChange} for="load_name">Load Name</label>
            <button className="btn-flat" onClick={() => this.props.editFreight(this.props.product.id)}>Create Freight Load</button>
        </div>
        </div>
    </form>
  </div>
    )
}

export default EditFreight;
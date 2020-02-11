import React from 'react';

//create functional component to return Modal attributes
function EditFreightModal(props) {
    //Form, Button, Header, Modal from semantic-ui-react
    //state not available do not use state or this
    return (
        <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input placeholder="Placeholder" id="load_name" type="text" class="validate">
          <label for="load_name">Load Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate">
          <label value={props.productToEdit.name} onChange={props.handleEditChange} for="last_name">Edit Inbound Freight</label>
        </div>
      </div>
      
     
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate"></input>
          <label for="email">Email</label>
        <button type='submit'>Submit</button>
        </div>
      </div>
    </form>
  </div>
       
                
                 
               

    )
}

export default EditFreightModal;
import React from 'react';
import { Form, Button, Header, Modal } from 'semantic-ui-react';

//create functional component to return Modal attributes
function EditFreightModal(props) {
    //Form, Button, Header, Modal from semantic-ui-react
    //state not available do not use state or this
    return (
        <Modal open={props.open} closeIcon onClose={props.closeModal}>
                <Header>Edit Inbound Freight</Header>
                <Modal.Content>
                    <Form
                        size='large'
                        onSubmit={props.updateFreight}
                    >
                        <Form.Field>
                            <lable>Load Name</lable>
                            <Form.Input
                                type="text"
                                name="name"
                                value={props.productToEdit.name}
                                onChange={props.handleEditChange}
                            />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Modal.Content>
            </Modal>

    )
}

export default EditFreightModal;
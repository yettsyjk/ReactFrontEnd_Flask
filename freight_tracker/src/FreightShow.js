import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';

class FreightShow extends Component {
    state = {
        products: false
    }
    render() {
        const { products } = this.state
        return (
            <Card key={this.props.product.id}>
                <Card.Content>
                    <Card.Header>Load Name: {products.name}</Card.Header>
                </Card.Content>
                <Button onClick={() => this.props.deleteFreight(this.props.product.id)}>Delete Freight Load</Button>
                <Button onClick={() => this.props.editFright(this.props.product.id)}>Edit Freight Load</Button>
            </Card>
        )
    }
}


export default FreightShow;
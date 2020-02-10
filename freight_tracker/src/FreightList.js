import React from 'react';
import { Card, Button } from 'semantic-ui-react';

function FreightList(props){
    console.log(props)
    const { products } = props

    const freightList = products && products.map((product) => {
        return (
            <div className="freightList">FreightList
                <Card key={product.id}>
                    <Card.Content>
                        <Card.Header>Load Name: {product.name}</Card.Header>
                    </Card.Content>
                    <Card.Content extra>
                        <Button onClick={() => props.deleteFreight(product.id)}>Delete Freight Item</Button>
                        <Button onCLick={() => props.editFreight(product.id)}>Edit Freight Item</Button>
                    </Card.Content>
                </Card>
            </div>
        )
    })

    return (
        <Card.Group centered>
            {freightList}
        </Card.Group>
    )
}

export default FreightList;
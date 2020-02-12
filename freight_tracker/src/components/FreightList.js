import React from 'react'

import FreightCard from './FreightCard'

function FreightList(props) {
    console.log(props)
    const { products } = props

    products && products.map((product) => {
        return (
            <FreightCard product={product} />
        )
    })
}

export default FreightList
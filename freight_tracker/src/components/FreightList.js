import React from 'react'

import FreightCard from './FreightCard'

function FreightList(props) {
    //console.log(props) will log empty products array but the typeof data is an object
    // console.log(props)
    // console.log(typeof(props))
    const { products } = props

    // if (products.length > 0) {
    //     return (
    //         products.map((product) => <FreightCard product={product} {...props}/>)
    //     )
    // } else {
    //     return 'hello'
    // }
    return products ? products.map((product) => <FreightCard product={product} {...props}/>) : null;
}

export default FreightList
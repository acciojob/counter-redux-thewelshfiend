import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {
    const count = useSelector((store) => {
        return store.slice
    })

    return (
        <h1 id='display'>Count: {count}</h1>
    )
}

export default Display
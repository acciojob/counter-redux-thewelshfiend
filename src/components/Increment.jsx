import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../Utilities/slice'

const Increment = () => {
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(increment())}>increment</button>
    )
}

export default Increment
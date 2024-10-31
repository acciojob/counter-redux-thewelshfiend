import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement } from '../Utilities/slice';

const Decrement = () => {
    const dispatch = useDispatch();

    return (
        <button onClick={() => (dispatch(decrement()))}>decrement</button>
    )
}

export default Decrement
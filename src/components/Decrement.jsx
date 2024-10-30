import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { decrement } from '../Utilities/slice';

const Decrement = () => {
    const count = useSelector((store) => {
        return store.slice
    })
    const dispatch = useDispatch();

    return (
        <button onClick={() => {
            if (count == 0) {
                return
            }

            dispatch(decrement())
        }}>Decrement</button>
    )
}

export default Decrement
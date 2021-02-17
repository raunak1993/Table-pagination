import React, { useEffect } from 'react';

import { getData } from "../actions/table";
import { useDispatch } from 'react-redux';

const Paginator = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getData())
    }, [])

    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px', cursor: 'pointer' }}>
            <span style={{ border: 'solid 1px black', padding: '5px' }}>Prev</span>
            <span style={{ padding: '5px' }}>1</span>
            <span style={{ border: 'solid 1px black', padding: '5px', cursor: 'pointer' }}>Next</span>
        </div>
    )
};

export default Paginator;
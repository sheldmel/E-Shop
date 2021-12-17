import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = ({ text }) => {
    return (
        <Spinner animation='border' role='status' style={{width: '100px', height: '100px', margin: 'auto', display: 'block'}}>
            <span className='sr-only'>Loading {text}...</span>
        </Spinner>
    )
}

export default Loader

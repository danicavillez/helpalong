import React from 'react'
import Dropdown from './layout/Dropdown'

export default function MentalHealth() {
    return (
        <div>
            <h1> Mental Health Resources</h1>
            <h2> What County are you located in? </h2>
                <Dropdown />
            <h2> Do you need someone to talk to? </h2>
        </div>
    )
}
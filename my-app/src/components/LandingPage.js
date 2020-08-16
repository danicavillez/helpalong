import React from 'react'

export default function LandingPage() {
    return (
        <div>
            <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4 text-center">Why use community resources?</h1>
                <p class="lead text-center">While many folx have historically used 911 as a hotline to contact police for various emergencies, the truth is 
                this force is not equipped to handle many of crisises that people call them with. In fact, the United States has a long history of police prutality and has ccontinually harmed
                communities of color (especially Black communities). By contacting organizations or professionals with crisis and deescalation traning, you are minimizing harm and 
                pursuing the action that best equipped with handling your situation.</p>
            </div>
            </div>
            <div className="card text-center">
                <div className="card-body">
                    <h3 className="card-title">What Is Happening?</h3>
                    <p className="card-text">Which category best describes your situation?</p>
                    <a href="/MentalHealth" className="btn btn-primary mx-1">Mental Health</a>
                    <a href="/IllOrPhysicalHealth" className="btn btn-primary mx-1">Physical Health</a>
                    <a href="/Issues" className="btn btn-primary mx-1">Having an Issue with Someone</a>
                    <a href="/INeedResources" className="btn btn-primary mx-1">Food/Housing Resources</a>
                </div>
            </div>
        </div>
    )
}
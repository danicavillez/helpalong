import React from 'react'

export default function LandingPage() {
    return (
        <div>
            <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4 text-center">Why?</h1>
                <p class="lead text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            </div>
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">What Is Happening?</h5>
                    <p className="card-text">which topic best describes your situation?</p>
                    <a href="/MentalHealth" className="btn btn-primary mx-1">Mental Health</a>
                    <a href="/IllOrPhysicalHealth" className="btn btn-primary mx-1">Ill or Physically Health</a>
                    <a href="/Issues" className="btn btn-primary mx-1">Having an Issue With Someone</a>
                    <a href="/INeedResources" className="btn btn-primary mx-1">I Need Resources</a>
                </div>
            </div>
        </div>
    )
}
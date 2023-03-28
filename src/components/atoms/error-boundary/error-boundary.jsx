import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
    state = {hasError: false};
    static getDerivedStateFromError() {
        return {hasError: true};
    }   

    componentDidCatch(error, info) {
        // typically you would log this to something like TrackJS or New Relic
        console.log("Error Boundary component caught ana error", error, info);
    }

    render(){
        if(this.state.hasError) {
            return (
                <div>
                    <h1>Something went wrong.</h1>
                    <Link to="/">Go back to the homepage</Link>
                </div>
            )
        }

        return this.props.children;
    }
};

export default ErrorBoundary;



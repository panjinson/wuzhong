import React from 'react';
import { Redirect } from "react-router-dom";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
    }

    render() {
        if (this.state.errorInfo) {
            // Error path
            return (
                // <div>
                //     abcdefg<br></br>
                //     <h2>Something went wrong.</h2>
                //     <details style={{ whiteSpace: 'pre-wrap' }}>
                //         {this.state.error && this.state.error.toString()}
                //         <br />
                //         {this.state.errorInfo.componentStack}
                //     </details>
                // </div>

                <Redirect
                    to={{
                        pathname: "/error",
                        state: {
                            from: "location",
                            error: this.state.error,
                            errorInfo: this.state.errorInfo
                        }
                    }}
                />
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}



export default ErrorBoundary;
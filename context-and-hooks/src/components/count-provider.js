import React from 'react';
export const CountContext = React.createContext();

class CountProvider extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            count: 0,
            increment: this.incrementCounter,
            decrement: this.decrementCounter,
            color: "#ccc666"
        }
    }

    incrementCounter = (count) =>{
        let up = this.state.count + 1;
        this.setState({ count: up });
    }
    decrementCounter = () =>{
        let down = this.state.count - 1;
        this.setState({ count: down });
    }

    render() {
        return (
            <CountContext.Provider value={this.state}>
                {this.props.children}
            </CountContext.Provider>
        )
    }
}

export default CountProvider;
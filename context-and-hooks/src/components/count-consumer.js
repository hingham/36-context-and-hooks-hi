import React from 'react';
import {CountContext} from "./count-provider.js";

const content = props =>{
    console.log('in props');
    return (
        <CountContext.Consumer>
            {(context)=> {
                const styles = {
                    backgroundColor: context.color
                };
                console.log(context);
                return(<div style={styles}> 
                    <h2>{context.count}</h2>
                    <button onClick= {() => context.increment()}>Increment</button>
                    <button onClick= {() => context.decrement()}>Decrement</button>
                </div>);
            }}
        </CountContext.Consumer>
    )
}

export default content;
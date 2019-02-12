import React from 'react';
import {SettingsContext} from "./context.js";

/**
 *
 *
 * @param {*} props
 * @returns dom elements
 */
const content = props =>{
    console.log('in props');
    return (
        <SettingsContext.Consumer>
            {(context)=> {
                const styles = {
                    backgroundColor: context.color
                };
                console.log(context);
                return(<div style={styles}> 
                    <h1>{context.title}</h1>
                    <button onClick= {() => context.changeTitleTo('Hiya')}>change title</button>
                </div>);
            }}
        </SettingsContext.Consumer>
    )
}

export default content;
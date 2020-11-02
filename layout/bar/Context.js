
import React, { Component } from 'react'
const data = React.createContext();
export default class Context extends Component {
    state = {
        names: [vijay, reddy, prashanth]
    }
    render() {
        return (
            <data.Provider value={state}>
                {props.children}
            </data.Provider>
        )
    }
}


export const Consumer = data.Consumer;

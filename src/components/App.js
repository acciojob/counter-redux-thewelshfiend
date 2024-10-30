import React from "react";
import { Provider } from "react-redux";
import './../styles/App.css';
import Display from "./Display";
import Increment from "./Increment";
import Decrement from "./Decrement";
import store from "../Utilities/store";

const App = () => {
    return (
        <Provider store={store}>
            <div>
                {/* Do not remove the main div */}
                <Display />
                <div>
                    <Increment />
                    <Decrement />
                </div>
            </div>
        </Provider>
    )
}

export default App
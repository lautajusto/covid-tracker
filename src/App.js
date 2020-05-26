import React from 'react';

import { Cards, Charts, CountryPicker } from './components';
import styles from './App.module.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Cards />
                <CountryPicker />
                <Charts />
                
            </div>
        )
    }
}

export default App;
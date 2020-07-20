import React from 'react';

import { Cards, Charts, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import Footer from './components/Footer/Footer';


class App extends React.Component {
    state = { data: {},
            country: '',

    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    //Creamos el metodo para pasarlo como prop en countrypicker 
    //asi puede tomar los datos de los paises

    handleCountryChange= async(country) => {
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country });
    }


    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <Cards data = {data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Charts data={data} country={country} />
                <Footer />
            </div>
        )
    }
}

export default App;
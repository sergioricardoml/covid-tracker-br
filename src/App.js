import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

// function App() {
//   return (
//     <h1>Hello World</h1>
//   );
// }

class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data}/>
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}

export default App;
import React, { Component } from 'react';
import client from './client';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({isLoading: true})
    let query = '*[_type=="movie"][0]'
    //let response = fetch("https://a6q6x37w.api.sanity.io/v1/data/query/production?query=*%5B_type%3D%3D%22movie%22%5D%5B0%5D").then(response => {console.log("Responding httpfetch: ", response)});

    client.fetch(query)
      .then(response => {
        console.log("Responding: ", response)
      })
      .then(response => this.setState({ data: response, isLoading: false }));
  }

  render() {
    const {data, isLoading} = this.state;
    console.log("State: ", this.state);
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return(
      <h1>Endres Reactside</h1>
      

    )
  }
}

export default App;

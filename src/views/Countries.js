import React, { Component } from 'react'
import Seo from '../components/Seo'
import Page from '../components/Page'

const CountriesRow = ({ country }) => (
  <tr>
    <td>{country.country_code}</td>
    <td>{country.country_name}</td>
    <td>{country.dialling_code}</td>
  </tr>
)

const CountriesTable = ({ countries }) => (
  <table>
    <tbody>
    { countries.map(country => <CountriesRow key={country.country_code} country={country} />) }
    </tbody>
  </table>
)

const LoadableCountriesTable = ({state, countries}) => {
  switch (state) {
    case "loading":
      return <div>Loading</div>;
    case "loaded":
      return <CountriesTable countries={ countries } />;
    default:
      return <div>Error happened</div>;
  }
}

class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: null,
      state: "loading"
    };
  }

  componentDidMount() {
    const url = "/api/countryCodes.json";
    if (window.snapStore && window.snapStore[url]) {
      this.setState({
        state: "loaded",
        countries: window.snapStore[url]["countryCodes"]
      })
      return;
    }

    fetch(url).then(async (response) => {
      const countries = (await response.json())["countryCodes"];
      this.setState({
        state: "loaded",
        countries
      })
    }).catch(() => {
      this.setState({
        state: "error"
      })
    })
  }

  render() {
    return (
      <Page>
        <h1>This is the <strong>Countries</strong> view.</h1>
        <LoadableCountriesTable { ...this.state } />
        <Seo
          title="Countries"
          description="Countries list."
          path="/countries"
        />
      </Page>
    )
  }
}

export default Countries

import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchCity } from "../actions/actions";
import Index from "../components/city";

class App extends Component {
  componentDidMount() {
    this.props.fetchCity();
  }

  render() {
    const { fetchCity, city } = this.props;
    return <Index city={city} fetchCity={fetchCity} />;
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCity: () => dispatch(fetchCity())
});

const mapStateToProps = ({ city }) => {
  console.log({ city });
  return { city };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

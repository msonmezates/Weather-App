import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }
  onInputChange = event => {
    this.setState({
      term: event.target.value
    });
  }
  onFormSubmit = event => {
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          className="form-control"
          placeholder="Get a five-day forecast in your favorite cities"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
    </form>
  );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

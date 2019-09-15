import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: "" };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(evt) {
    this.setState({
      inputVal: evt.target.value
    });
  }
  onSubmit(evt) {
    evt.preventDefault();
    this.props.onSearchSubmit(this.state.inputVal);
  }
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.inputVal}
              onChange={this.onChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;

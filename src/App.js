import React, { Component } from "react";
import Search from "./components/Search.component";
import VideosList from "./components/videos.list";
import youtube from "../src/API/youtube";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };
  }
  onSearchSubmit = async text => {
    const response = await youtube.get("/search", {
      params: {
        q: text
      }
    });
    this.setState({
      videos: response.data.items
    });
  };
  render() {
    return (
      <div className="ui container">
        <Search onSearchSubmit={this.onSearchSubmit} />
        <VideosList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;

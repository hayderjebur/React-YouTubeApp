import React, { Component } from "react";
import Search from "./components/Search.component";
import VideosList from "./components/videos.list";
import youtube from "../src/API/youtube";
import VideoDetails from "./components/VideoDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
  }
  componentDidMount() {
    this.onSearchSubmit("buildings");
  }
  onSearchSubmit = async text => {
    const response = await youtube.get("/search", {
      params: {
        q: text
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  onVideoSelect = video => {
    this.setState({
      selectedVideo: video
    });
  };
  render() {
    return (
      <div className="ui container">
        <Search onSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              {" "}
              <VideosList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

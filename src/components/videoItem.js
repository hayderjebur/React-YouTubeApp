import React from "react";
import "./videoItem.css";

const VideoItem = ({ video }) => {
  return (
    <div className="video-item item">
      <img src={video.snippet.thumbnails.medium.url} className="ui image" />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};
export default VideoItem;

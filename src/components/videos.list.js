import React from "react";
import VideoItem from "./videoItem";

const VideosList = ({ videos }) => {
  const renderList = videos.map(video => {
    return <VideoItem video={video} />;
  });
  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideosList;

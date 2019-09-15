import React from "react";
import VideoItem from "./videoItem";

const VideosList = ({ videos, onVideoSelect }) => {
  const renderList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideosList;

import React from "react";
import FollowerCard from "./follower-card";

const FollowerList = props => {
  return (
    <div className="list">
      {props.followers.map(follower => (
        <FollowerCard follower={follower} />
      ))}
    </div>
  );
};

export default FollowerList;

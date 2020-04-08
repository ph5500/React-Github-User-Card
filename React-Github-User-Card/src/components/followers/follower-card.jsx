import React from "react";

const FollowerCard = props => {
  return (
    <div className="user-card">
      <div className="image-cont">
        <img src={props.follower.avatar_url} alt="github avatar"></img>
      </div>
      <div className="card-info">
        <h2>{props.follower.login}</h2>
        <a href={props.follower.url}>{props.follower.url}</a>
      </div>
    </div>
  );
};

export default FollowerCard;

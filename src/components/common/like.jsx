import React, { Component } from "react";

const getClassesHeart = (liked) => {
  const classes = liked ? "fa fa-heart" : "fa fa-heart-o";

  return classes;
};

const Like = ({ liked, onClick }) => {
  return (
    <React.Fragment>
      <i className={getClassesHeart(liked)} onClick={onClick}></i>
    </React.Fragment>
  );
};

export default Like;

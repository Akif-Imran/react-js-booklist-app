import React from "react";

const SegmentCard = (props) => {
  return (
    <div className="ui cards">
      <div className="card">
        <div className="ui segment">
          <div className="content">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default SegmentCard;

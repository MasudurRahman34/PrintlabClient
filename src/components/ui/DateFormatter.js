import React from "react";
import Moment from "react-moment";

const DateFormatter = ({ dateInput, className }) => {
  return (
    <div className={className}>
      <Moment format="YYYY-MM-DD">{dateInput}</Moment>
    </div>
  );
};

export default DateFormatter;

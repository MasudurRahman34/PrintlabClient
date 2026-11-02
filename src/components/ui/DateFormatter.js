import React from "react";
import moment from "moment";

const DateFormatter = ({ dateInput, className }) => {
  return (
    <div className={className}>
      {dateInput ? moment(dateInput).format("YYYY-MM-DD") : null}
    </div>
  );
};

export default DateFormatter;

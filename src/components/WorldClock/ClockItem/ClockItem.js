import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./desktop.scss";
import moment from "moment-timezone";

function getClock(tz) {
  const tm = tz ? moment().tz(tz) : moment();
  return {
    h: tm.hour() * 30,
    m: tm.minute() * 6,
    s: tm.second() * 6,
  };
}

const ClockItem = ({ timeShift, name, handleDell, id }) => {
  const [clock, setClock] = useState(getClock());

  useEffect(() => {
    setClock(getClock(timeShift));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const timeOut = window.setTimeout(() => {
      setClock(getClock(timeShift));
    }, 500);
    return () => {
      window.clearTimeout(timeOut);
    };
    // eslint-disable-next-line
  }, [clock]);

  return (
    <div className="ClockItem">
      <div className="clockName">{name}</div>
      <i onClick={() => handleDell(id)} className="material-icons close">
        close
      </i>
      <div className="clock">
        <div className="hour">
          <div
            className="hours"
            style={{ transform: `rotateZ(${clock.h + clock.m / 12}deg)` }}
          ></div>
        </div>
        <div className="minute">
          <div
            className="minutes"
            style={{ transform: `rotateZ(${clock.m}deg)` }}
          ></div>
        </div>
        <div className="second">
          <div
            className="seconds"
            style={{ transform: `rotateZ(${clock.s}deg)` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

ClockItem.propTypes = {
  timeShift: PropTypes.string,
  name: PropTypes.string,
  handleDell: PropTypes.func,
  id: PropTypes.string,
};

export default ClockItem;

import React, { useEffect, useState } from "react";
import moment from "moment";

const useCountDownTimer = ({ days }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const [targetDate, setTargetDate] = useState("");

  const calculateTargetTime = () => {
    const now = new Date();
    const target = new Date();

    target.setDate(now.getDate() + days);
    target.setHours(17, 0, 0, 0);

    if (now.getHours() >= 17) {
      target.setDate(target.getDate() + 1);
    }

    setTargetDate(target);
    return target;
  };

  const calculateTimeLeft = (target) => {
    const now = new Date();
    const difference = target - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    const target = calculateTargetTime();

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(target));
    }, 1000);

    return () => clearInterval(timer);
  }, [days]);

  const formattedDate = moment(targetDate).format("ddd. Do MMM");

  return { timeLeft, formattedDate };
};

export default useCountDownTimer;

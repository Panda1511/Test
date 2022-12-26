import React from "react";

function useInterval(max, delay, show) {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    const incre = Math.floor((max * 2) / 100);
    const interval = setInterval(() => {
      if (show) {
        setCounter(counter + incre);
      }
    }, delay);
    if (counter === max) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  });

  return { counter };
}

export default useInterval;

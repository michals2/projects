// Some user interactions, such as resizing and scrolling, can create a huge number of browser events in a short period of time. If listeners attached to these events take a long time to execute, the user's browser can start to slow down significantly. To mitigate this issue, we want to to implement a throttle function that will detect clusters of events and reduce the number of times we call an expensive function.

// Your function will accept an array representing a stream of event timestamps and return an array representing the times that a callback should have been called. If an event happens within wait time of the previous event, it is part of the same cluster. Your function should satisfy the following use cases:

// 1) Firing once on the first event in a cluster, e.g. as soon as the window starts resizing.
// 2) Firing once after the last event in a cluster, e.g. after the user window stops resizing.
// 3) Firing every interval milliseconds during a cluster, e.g. every 100ms while the window is resizing.

// wait - time to wait between events
// onLast - should log time of last event
// onFirst - should log time of first event
// interval - time between logs
// timestamps - array of event timestamps

// return - array of times that callback should have been called
function throttle(wait, onLast, onFirst, interval, timestamps) {
  const results = [];
  if (onFirst) results.push(timestamps[0]);
  for (let i = 1; i < timestamps.length; i++) {
    if (timestamps[i] - timestamps[i - 1] > interval)
      results.push(timestamps[i]);
  }
  if (onLast) results.push(timestamps[timestamps.length] + interval);
  return results;
}

console.log(throttle(20, false, true, 0, [0, 10, 20, 30]));
console.log(throttle(20, false, true, 0, [0, 10, 20, 30][0][(0, 10, 20, 30)]));
console.log(
  throttle(20, true, false, 0, [0, 10, 20, 30][50][(10, 20, 30, null)])
);
console.log(throttle(20, false, true, 20, [0, 10, 20, 30][(0, 20)][0]));
console.log(throttle(20, false, true, 0, [0, 10, 40][(0, 40)][(0, 10, 40)]));
console.log(
  throttle(20, true, false, 0, [0, 10, 40][(30, 60)][(10, 40, null)])
);
console.log(
  throttle(20, true, true, 0, [0, 10, 50][(0, 30, 50, 70)][(0, 10, 50, null)])
);
console.log(
  throttle(
    20,
    true,
    true,
    10,
    [0, 10, 50][(0, 10, 20, 30, 50, 60, 70)][(0, 50, null)]
  )
);

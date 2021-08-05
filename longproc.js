const iterations = 100; // process iteration count
const load = 10; // in ms Blocking load per iteration
const processes = 6; // Number of iteration concurrent processes
const tickTime = 1000; // ms between tick calls
const idlerInterval = 20; // ms Min interval between idle execution context
const ids = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

/* for stats */
var tickerStart;
var totalTime = 0;
var processCount = 0;
var expectedTime = 0;
var tickCpuTime = 0;

const idler = (() => {
  var lastIdle = 0;
  var interval = 3; // ms
  function timeout(ready) {
    setTimeout(ready, 0);
  }
  const API = {
    idle() {
      var now = performance.now();
      if (now - lastIdle > interval) {
        lastIdle = now;
        return new Promise(timeout);
      }
    },
    start() {
      lastIdle = performance.now();
    },
    set interval(val) {
      interval = val >= 1 ? val : 1;
    },
    get interval() {
      return interval;
    }
  };
  return API;
})();

// The work function
async function longFunction(cycles = 100, load = 10, id) {
  processCount += 1;
  expectedTime += cycles * load;
  const now = performance.now();
  while (cycles--) {
    workLoad(load);
    await idler.idle();
  }
  const time = performance.now() - now;
  processCount -= 1;
  results(time, id);
}

function ticker() {
  const now = performance.now();
  if (processCount > 0) {
    log('Tick ' + (performance.now() - tickStart).toFixed(0) + ' ms ');
    setTimeout(ticker, tickTime);
  }
  tickCpuTime += performance.now() - now;
}

log(
  `Starting ${processes} iterators with ${iterations * load}ms workload each.`
);
idler.interval = idlerInterval;
log(`Idler interval ${idlerInterval}ms.`);
idler.start();
var tickStart = performance.now();
for (let i = 0; i < processes; i++) {
  longFunction(iterations, load, ids[i]);
}
ticker();

/*========================================================================
  helper functions not related to answer
  ========================================================================*/

function log(data) {
  datalog.innerHTML = `<div>${data}</div>` + datalog.innerHTML;
}
function results(time, id) {
  log("Id '" + id + "' took : " + time.toFixed(3) + 'ms to complete.');
  if (processCount === 0) {
    var totalTime = performance.now() - tickStart - tickCpuTime;
    log('===================================================');
    log('Expected time : ' + expectedTime.toFixed(0) + 'ms');
    log('Actual time : ' + totalTime.toFixed(0) + 'ms');
    log(
      'Idler total overhead : ' + (totalTime - expectedTime).toFixed(3) + 'ms'
    );
    const overhead = (totalTime - expectedTime) / (processes * iterations);
    log(
      'Idler per iteration overhead : ' +
        overhead.toFixed(3) +
        'ms ' +
        ((overhead / load) * 100).toFixed(2) +
        '% of iteration time'
    );
    log('Ticker took : ' + tickCpuTime.toFixed(3) + 'ms');
    log('===================================================');
  }
}
function workLoad(time = 1) {
  // blocks for time in ms
  if (!isNaN(time)) {
    var till = performance.now() + Number(time);
    while (performance.now() < till);
  }
}

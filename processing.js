import ConcurrentTaskQueue from './multitask.js';

const costlyFunction = arg =>
  new Promise(resolve => {
    setTimeout(() => resolve(arg), 10_000);
  });

const batchSize = 1;
const taskQueue = new ConcurrentTaskQueue(
  [
    // wrap all functions to prevent direct execution
    () => costlyFunction(1000),
    () => costlyFunction(5000),
    () => costlyFunction(8000),
    () => costlyFunction(9000)
  ],
  batchSize
);

export default taskQueue;

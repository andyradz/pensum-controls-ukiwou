import ConcurrentTaskQueue from './multitask.js';

const costlyFunction = arg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(arg), arg);
  });

const costlyFunction1 = arg =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(arg), arg);
  });

const batchSize = 2;
const taskQueue = new ConcurrentTaskQueue(
  [
    // wrap all functions to prevent direct execution
    () => costlyFunction(1000),
    () => costlyFunction(5000),
    () => costlyFunction(8000),
    () => costlyFunction(9000),
    () => costlyFunction(300),
    () => costlyFunction(1300),
    () => costlyFunction(2300),
    () => costlyFunction(3300),
    () => costlyFunction(4300),
    () => costlyFunction(5300),
    () => costlyFunction(6300),
    () => costlyFunction(7300),
    () => costlyFunction(3001),
    () => costlyFunction(4001)
  ],
  batchSize
);

export default taskQueue;

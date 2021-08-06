function resolveAfter5Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 1);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter5Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();

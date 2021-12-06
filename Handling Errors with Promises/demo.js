// Handling errors with promises
function sleep(fail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fail) {
        // throw new Error("Promise Error");
        reject(new Error("Promise Error"));
      } else {
        resolve(true);
      }
    }, 2000);
  });
}

// Resolves
sleep().then((val) => {
  console.log(val);
});

// Rejects and error is caught
sleep(true)
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Will always run...");
  });

// Rejects but error not being caught
sleep(true);

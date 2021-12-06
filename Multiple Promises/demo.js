// Chaining Promises

function sleep(seconds, msg, reject = false) {
  return new Promise((resolve, rej) => {
    setTimeout(() => {
      if (!reject) {
        resolve(msg);
      } else {
        rej(msg);
      }
    }, seconds * 1000);
  });
}

function promiseChaining() {
  sleep(10, "After 10 seconds").then((msg) => {
    console.log(nsg);
  });

  sleep(1, "After one second")
    .then((msg) => {
      console.log(msg);
      return sleep(2, "After 3 seconds.");
    })
    .then((msg) => {
      console.log(msg);
      return sleep(3, "After 7 seconds.");
    })
    .then((msg) => {
      console.log(msg);
    });
}

// Promise utilities
function promiseUtils() {
  // Promise.all without promise rejection
  sleep(2, "Promise.all").then((hdr) => console.log(hdr));
  let promise1 = sleep(3, "promise1");
  let promise2 = sleep(4, "promise2");
  let promise3 = sleep(5, "promise3");

  Promise.all([promise1, promise2, promise3]).then((result) => {
    console.log(result);
  });
  console.log();

  // Promise.all with promise rejection
  // The app crashes if the rejection is not caught
  sleep(5, "\nPromise.all (one promise will reject)").then((hdr) =>
    console.log(hdr)
  );
  let promise4 = sleep(6, "promise4");
  let promise5 = sleep(8, "promise5");
  let promise6 = sleep(10, "promise6", true); // Will reject
  Promise.all([promise4, promise5, promise6])
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });

  // Promise.race
  sleep(10, "\nPromise.race").then((hdr) => console.log(hdr));
  const promise7 = sleep(11, "promise7");
  const promise8 = sleep(15, "promise8");
  const promise9 = sleep(20, "promise9");

  Promise.race([promise7, promise8, promise9]).then((val) => {
    console.log("The promise that finished first: ", val);
  });

  // Promise.any
  sleep(24, "\nPromise.any").then((hdr) => console.log(hdr));
  const promise10 = sleep(25, "promise10");
  const promise11 = sleep(30, "promise11");
  const promise12 = sleep(35, "promise12");

  Promise.any([promise10, promise11, promise12]).then((val) => {
    console.log("The promise that resolved first: ", val);
  });
}

// promiseChaining();
promiseUtils();

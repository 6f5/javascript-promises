// Demo: Standard Promise Usage

const fetch = require("cross-fetch");
const URL = "https://jsonplaceholder.typicode.com/todos";

// Promise
fetch(URL)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });

// Async/await
const DELAY = 2000;

async function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1 });
    }, DELAY);
  });
}

async function validate(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, DELAY);
  });
}

async function login() {
  console.log("Getting user data...");
  const user = await getUser();
  console.log("User Data: ", user);
  console.log("Validating user...");
  const valid = await validate(user);
  console.log("is valid: ", valid);
  if (valid) {
    console.log("✔ Login success.");
  } else {
    console.log("✖ Login failed");
  }
}

login();

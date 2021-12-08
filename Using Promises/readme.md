# Why use promises?

- Make code more readable and easy to maintain.
- Can make code easier to troubleshoot if used correctly
  - See the async functions
- There is often no choice
  - Application you must maintain or library you must use already has promises everywhere.

# The Promise Specification

[Promises A+ Spec](https://promisesaplus.com/)

```js
let promise = new Promise(...);
promise.then(...);
promise.catch(...);
promise.finally(...);
```

- A promise is a value that can be returned by any function.
- That value has the following methods...
  - then()
  - catch()
  - finally()
- Promises sometimes have the following methods...
  - when()
  - done()

# The Promise Specification: Then

- .then() is the most commonly used method of promises.

- .then() is passed a function.

- When the promise resolves, the function is executed.

# Standard Promise Usage

```js
function fetch(url){
    return new Promise(...);
}

fetch("google.com").then(...)
```

- Promises can be used wherever a callback would be.

- Promise is created within the function body and returned.

- .resolve() method is called at some point (usually from another closure).

# Returning Promises

- When a function returns a promise, the value must be accessed using the .then() method.

  - This quality is also known as being "thenable".

- Functions which return promises can also be invoked after calling the yield or await keywords.
  - yield and await are used in special functions called generators and async functions, respectively.
  - Both pause code and execution on the current line until the promise resolves.

# Where do we return promises?

### DO return a promise

- Making HTTP requests
- Performing memory-intensive local operations.
- Working with values that might be returned later.
- Anywhere where asynchronous values can be found.

### DON'T return a promise

- When the value to be returned is always available locally.
  - Just return the values
- When multiple values will be returned at multiple points.
  - Use a generator

# Async/Await and Promises

```js
async function login() {
  const user = await getUser();
  const valid = await validate(user);
  if (valid) {
    await updateToken(user);
    return true;
  } else {
    return false;
  }
}
```

- Async functions are special JavaScript functions

  - Added very recently
  - Can delay code execution

- Async functions use promises as a requirement

  - Promises go after keyword await
  - Code resumes when promise resolves

- Async functions also return promises

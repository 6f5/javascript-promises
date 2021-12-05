# What is a "Promise"?

- A tool to delay the execution of code.
- Promises have a ".then()" property.
- Code you put inside ".then()" executes later.

# What is a JavaScript promise?

```js
login().then((status) => alert(status));
```

- A type of value javascript functions can return.
- Meant to be asynchronous.
- Promises have ".then()" method (important!).
- Method passed to ".then()" is invoked when function is complete (Like a callback).

# Why do promises exist?

```js
fetch("google.com", function (response) {
  console.log(response);
});
```

- JavaScript is not designed with any wait keyword that pauses execution.
  - await added in later versions, after promises
- Async values need to be passed to callback functions instead of returned.

```js
getUserData(function (userData) {
  validateUserData(userData, function (verified) {
    if (verified) {
      loginUser(userData, function (response) {
        console.log(response);
        // Now what?
      });
    }
  });
});
```

- Passing callbacks to functions has a few main problems.
  - If the callback has to do something asynchronus, you must go one layer deeper into nested callback functions known as "callback hell" or "callback chaos".
- Does this example look familiar?
  - If so, you may be a JavaScript developer.

# Callbacks vs Promises - 1 to 1 example from chaotic to convenient

```js
getUserData(function (userData) {
  validateUserData(userData, function (verified) {
    if (verified) {
      loginUser(userData, function (response) {
        console.log(response);
        // Now what?
      });
    }
  });
});
```

```js
getUserData()
  .then((userData) => validateUserData(userData))
  .then((userData, verified) => {
    if (verified) {
      return loginUser(userData);
    }
  })
  .then((response) => {
    // Do soemthing with response
  });
```

# Inconsistency of Promises 🤨

Small fraction of the randomness of promises

```
preomise.then(...);
preomise.when(...);
preomise.done(...);
preomise.value(...);
preomise.fulfill(...);
preomise.anything(...);
preomise.reject(...);
preomise.resolve(...);
preomise.invert(...);
```

The JavaScript object has the following methods...

```
Promise.all();
Promise.race();
Promise.any();
Promise.conjoin();
Promise.reduce();
Promise.spread();
Promise.append();
```

But all these methods are included in some variations of promises and not others 😶.
For example, some promises have the method ".fulfill()" and ".done()" method, which acts like ".then()" method but others don't. In addition, the Promise object itself offers a number of different helper methods.

# So what caused all this? Why are Promises inconsistent?

- Before promises were an official part of JavaScript, they were a developing standard.
  - Standard that everyone eventually agreed upon known as A-Plus
  - https://promisesaplus.com
- As the promise spec was still being developed, various libraries (jQuery,etc.) included various implementations of the spec.
  - Generally, the ".then()" functionality was always included but various other features (error handling, etc.) would not be there or function differently from library to library.
- Although there is now one offical standard, millions of applications exist which use these provisional implementations or create their own variations on purpose.
- Libraries that use an incorrect implementation of promises are exremely common.
  - jQuery uses its own implementation of promises which is different between versions and doesn't really match the specification.
- As a practicing web developer, being assigned to a project which uses legacy jQuery is exremely likely.
  - Be prepared for all sorts of strange and fantastical results when using promises.
  - Use superior understnading of principles to troubleshoot any situation.

# Which Promise specification should I use?

- Modern versions of JavaScript include a built-in promise definition.
  - It's not necessarily the best but because it's now included in basic JavaScript, will probably become the only standard.
- I will be using this version in the source code.

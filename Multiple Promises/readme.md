# Multiple Promises

- Few applications are complete after just one asynchronous action
- Async actions are often accompanied by yet more async actions
- Numerous scenarios exist for multiple async actions
  - invoked one after the other, with the subsequent requests depending on data from previous requests.
  - Invoked at the same time, wait for all the results before proceeding.
  - Invoked at the same time, wait for any result before proceeding.
  - Hundreds of others.

# Chaining Promises

```js
fetch("/api/key")
  .then((key) => getUser(key))
  .then((user) => verify(user))
  .then((verified) => (verified ? handleLogin() : rejectLogin()));
```

- Promises can return other promises.
- In this case, ".then()" can be placed on the following line.
- Solves the problem of ever deepening scope created by callbacks.
  - Has own problems - e.g., friendish difficulty of handling errors.

# Promise Utilities

```js
Promise.race(...);
Promise.any(...);
Promise.all(...);
```

- Common scenarios usually have utilities ready to handle them.
  - Waiting until every promise has resolved.
  - Only being interested in the first promise to resolve.
- Promise utilities are methods that handle such cases.
  - Usually take a collection of promises as an argument.

# Promise utilities: Race

```js
Promise.race(promise1, promise2, promise3).then((val) => {
  // val will be the value returned by whichever promise resolves first
});
```

- Creates a new, single promise from one or more component promises.
- The new promise resolve when the first promise that it's made up of, whichever one that is, resolves.
- Later values are ignored.
- Works if fulfilled or rejected.

# Promise Utilities: Any

```js
Promise.any(promise1, promise2, promise3).then((val) => {
  ...
});
```

- Similar to Race
- Composite promise resolves when either:
  - Any of the component promises resolves, or all of the component promises is rejected.

# Promise Utilities: All

```js
Promise.all(promise1, promise2, promise3).then((a, b, c) => {
  // resolves only when all three component promises have resolved
});
```

- Creates a new, single promise from one or more component promises.
- New promise resolves only after every component resolves.
  - All return values are available as an array.
- If one component promise does not resolve, the All-Promise won't resolve.

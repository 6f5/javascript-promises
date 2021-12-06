# What happens when an error happens inside a promise?

- Should the promise invoke reject or should it throw an error?
- What happens when a promise invoked by another promise errors? Does the caller error too?
- What does the call stack look like when investigating the error?

# Why is handling errors with promises so complicated?

```js
function a() {
  b().then(function c() {
    throw new Error();
  });
}
a();
```

- In this example, how do we report the error?
- Does the error originate with a(), since its being called eventually causes the error?
- Does it originate with b(), since b() returns a promise that throws an error?
- If it originates with c(), how are we to know that the problem starts when a() is called?

# Promise Status

### pending

- Promise still represents an undetermined value.
- Listeners can still be added to ".then()"
- The promise may still..
  - resolve into a value
  - throw an error
  - never resolve

### resolved/rejected

- The promise now represents a determined value.
- Subscribers to ".then()" are called at the instant it is resolved.
- Subscribing to ".then()" after resolution may...
  - Throw an error
  - Call ".then()" immediately with the resolved value.
  - Never resolve

# Summary

- Promises delay the execution of code.
- Promises have a ".then()" method.

  - There are many implementations but a standard one is built into JavaScript.
  - Encounterng a non-standard variation is very possible in a real-world context.

- Promises can return other promises.
  - Called "chaining"
- Promises can be combined.
  - Many become a single promise
  - Utilities such as any or all
- Promises can be rejected
  - Catching errors internally and calling reject allows us to handle errors outside the promise.

ES6 Promise Tasks
This project comprises tasks aimed at mastering the usage of Promises in ECMAScript 2015 (ES6).

Tasks To Accomplish:

0. Keep Every Promise
0-promise.js contains a script exporting a function, `getResponseFromAPI()`, which returns a Promise.

1. Honesty in Promises
1-promise.js exports a function, `getFullResponseFromAPI(success)`, returning a Promise. The parameter `success` is a boolean. If `true`, it resolves the promise with an object having `status: 200` and `body: 'Success'`. If `false`, it rejects the promise with an error message "The fake API is not working currently".

2. Exception Handling
2-then.js exports a function, `handleResponseFromAPI(promise)`, appending three handlers to the promise argument. Upon resolution, it returns an object with `status: 200` and `body: 'success'`. For rejection, it returns an empty Error object. Additionally, it logs "Got a response from the API" to the console for each resolution.

3. Handling Multiple Successful Promises
3-all.js script imports `uploadPhoto` and `createUser` from utils.js. It collectively resolves all promises using the `handleProfileSignup()` function, logging `body firstName lastName` to the console. It logs "Signup system offline" in case of an error.

4. Simple Promises
4-user-promise.js exports a function, `signUpUser(firstName, lastName)`, returning a resolved promise with an object having `firstName` and `lastName` attributes.

5. Promise Rejection
5-photo-reject.js exports a function, `uploadPhoto(filename)`, returning a Promise rejecting with an Error and the string "$fileName cannot be processed", where fileName is a string.

6. Handling Multiple Promises
6-final-user.js script imports `signUpUser` from 4-user-promise.js and `uploadPhoto` from 5-photo-reject.js. It exports a function `handleProfileSignup(firstName, lastName, fileName)` calling the two functions. It returns an array with the structure `[ { status, value || reason }, ... ]` after all promises are settled.

7. Load Balancer
7-load_balancer.js exports `loadBalancer(chinaDownload, USDownload)`, returning the value from the promise that resolves first, where chinaDownload and USDownload are Promises.

8. Error Handling with Try/Catch
8-try.js exports `divideFunction(numerator, denominator)`, where numerator and denominator are numbers. It throws an error "cannot divide by 0" if the denominator is 0, otherwise returns the result of the division.

9. Error Handling with Try/Catch
9-try.js exports `guardrail(mathFunction)`, appending the return value of `mathFunction` or the error message to an array named `queue`. It always adds the message "Guardrail was processed" to the queue.

10. Await/Async
100-await.js exports an async function `asyncUploadUser()` that calls `uploadPhoto` and `createUser`, returning an object `{ photo, user }`. If any async function fails, it returns an empty object `{ photo: null, user: null }`.

RESOURCES
- [JavaScript Promise: An introduction](link)
- [Await](link)
- [Async](link)
- [Throw/Try](link)

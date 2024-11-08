// Pure Function? In simple terms, pure functions do not have an external state. Therefore, all operations performed in pure functions are not affected by their state. As a result, the same input parameters will give the same deterministic output regardless of how many times you run the function.

function sum(a, b) {
  console.log("SUM");
  const c = a + b;
  return c;
}
sum(2, 3); //5
sum(2, 3); // 5
sum(2, 3); // 5
sum(2, 3); // 5
sum(2, 3); // 5
sum(2, 3); // 5
sum(2, 3); // 5
sum(2, 3); // 5
sum(10, 10); // 20

const num = 10;
// impure function
// Impure Function: An impure function is a function that contains one or more side effects. It mutates data outside of its lexical scope and does not predictably produce the same output for the same input.
function diff(a, b) {
  return (a - b) * num;
}

diff(5, 3);
diff(5, 3);
diff(5, 3);

num = 5;
diff(5, 3);

/**
 * Advantages of pure functions:
 * A pure function works as an independent function that gives the same output for the same inputs.
 * Pure functions are readable because of independent behavior. Moreover, they are straightforward to debug.
 * You can clone an external state into a pure function, but it does not change the purity of the function. -- ON HOLD
 */

// Impure
function addProperty(obj, key, value) {
  obj[key] = value;
  return obj;
}

// Pure
function addProperty2(obj, key, value) {
  const temp = { ...obj };
  temp[key] = value;
  return temp;
}

const student = {
  name: "Alok",
  favSubject: "CSE",
};

const temp = addProperty(student, "company", "JLL");
console.log(temp);

/**
 * The following JavaScript functions are inherently impure:
 * Math.random()
 * Date.now()
 * arr.splice()
 * arr.push()
 * arr.sort()
 * console.log() and alert() are also impure functions (although they generate the same behavior and always return the same value for identical calls).
 * JavaScript is synchronous by its nature. Therefore, asynchronous functions such as fetch and promise are impure.
 *
 * Advantages of impure functions:
 * Impure functions can use an in-place solution to reduce the space complexity.
 * In impure functions, the state can be modified to use the parent variable and call for the function compiling.
 */

// HOF
// If any function is accepting another function as argument, then it is called as HOF
// If any function is returning another function as argument, then it is called as HOF
// If any function is accepting another function as argument and returning another function as argument, then it is called as HOF

const hello = () => {
  console.log("Hello");
};

const executor = (cb) => {
  cb();
};

const executor2 = () => {
  return () => {
    console.log("Hello there");
  };
};

const executor3 = (cb) => {
  cb();

  return () => {
    console.log("Hello there");
  };
};

executor(hello);

const deepClone = (obj) => {
  if (obj === null) return null;
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    (key) =>
      (clone[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
  );
  return clone;
};

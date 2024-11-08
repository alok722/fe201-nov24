import { sum, diff, mul, SECRET } from "./math.js";

// It should return addition of sum, diff, multiply
function calculate(a, b) {
  console.log(SECRET);
  const total = sum(a, b) + diff(a, b) + mul(a, b);
  console.log(total);
}

calculate(2, 3); // 5 + 1 + 6 = 12

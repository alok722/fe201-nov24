console.log("Session 2 begins");

const x = new Object();
// console.log(x);

const y = {};
// console.log(y);

const student = {
  name: "Alok Raj",
  roll: 7,
  subject: "CSE",
  about: () => {
    console.log("I Love JS");
  },
  favColor: "black",
  address: {
    state: "Bihar",
    country: "IN",
  },
};

// console.log(student);
// console.log(Object.entries(student));
// console.log(Object.keys(student));
// console.log(Object.values(student));

const tempStudent = Object.assign({}, student);
const temp = { ...student, address: { ...student.address } };

student.favColor = "blue";
student.address.state = "KA";

// console.log(tempStudent);
// console.log(temp);
// console.log(student);

// How can I create a perfect deep copy?
// Hint -> Object.assign, recursion

class Util {
  constructor(data) {
    this.data = data;
  }

  sumSalaries() {
    const salaryArr = Object.values(this.data);
    return salaryArr.reduce((a, b) => a + b, 0);
  }

  averageSalary() {
    const total = this.sumSalaries();
    const employeeCount = Object.keys(this.data).length;
    return Math.round(total / employeeCount);
  }

  findSalaryRange() {
    const salaryArr = Object.values(this.data);
    const minSalary = Math.min(...salaryArr);
    const maxSalary = Math.max(...salaryArr);
    return maxSalary - minSalary;
  }
}

const employeeData = {
  John: 100,
  Pete: 500,
  Mary: 250,
};

const util1 = new Util(employeeData);
// console.log(util1.sumSalaries()); // 850
// console.log(util1.averageSalary());
// console.log(util1.findSalaryRange());

// Base class, Parent class
class CreditCard {
  constructor(cardName, cardNumber, expirationDate, cvv) {
    this.cardName = cardName;
    this.cardNumber = cardNumber;
    this.expirationDate = expirationDate;
    this.cvv = cvv;
  }

  rewardPoint() {
    console.log("2X reward point!");
  }

  transactions() {
    console.log("Transactions processed!");
  }
}

// Extended class, Child Class
class AmazonPayCreditCard extends CreditCard {
  constructor(brand, cardName, cardNumber, expirationDate, cvv) {
    super(cardName, cardNumber, expirationDate, cvv);
    this.brandAssociation = brand;
  }
  cashback() {
    console.log("If transaction is on Amazon, 5% cashback!");
  }
}

class RewardingCreditCard extends CreditCard {
  rewardPoint() {
    console.log("10X reward point!");
  }

  test() {
    console.log("Test method called!");
    super.rewardPoint();
  }
}

const card2 = new RewardingCreditCard(
  "RewardingCreditCard",
  34332334433,
  "25March20238",
  232
);
// card2.rewardPoint();
// card2.test();

const card1 = new AmazonPayCreditCard(
  "Swiggy",
  "AmazonPayCreditCard",
  34332334433,
  "25March20238",
  123
);
// console.log(card1);

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  markPresent() {
    console.log(`${this.name} marked present.`);
  }
  getRole() {
    console.log("Employee of office");
  }
}

class Developer extends Employee {
  constructor(name, department, prefLanguage) {
    super(name, department);
    this.prefLanguage = prefLanguage;
  }
  submitCode() {
    console.log("Code Submitted by", this.name, "from", this.department);
  }
  getRole() {
    console.log("Work with", this.prefLanguage);
  }
}

const rajesh = new Employee("Rajesh", "Design");
const alok = new Developer("Alok", "IT", "JavaScript");
// rajesh.markPresent();
// alok.markPresent();

// rajesh.submitCode();
// alok.submitCode();

rajesh.getRole();
alok.getRole();

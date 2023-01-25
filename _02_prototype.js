function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  // this.deposit = function (amount) {
  //   this.balance += amount;
  // };

  // this.widrow = function (amount) {
  //   this.balance -= amount;
  // };
}

const gauravAccount = new BankAccount("Gaurav Str");
const jonhAccount = new BankAccount("Jonh Doe", 1000);

// console.log(gauravAccount);
// console.log(jonhAccount );

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.widrow = function (amount) {
  this.balance -= amount;
};

gauravAccount.deposit(5000);
jonhAccount.deposit(1000);

gauravAccount.widrow(2000);
jonhAccount.widrow(500);

console.log(gauravAccount);
console.log(jonhAccount);

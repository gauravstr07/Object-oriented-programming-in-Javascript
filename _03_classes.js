const BankAccount = class {
  customerName;
  accountNumber;
  balance = 0;

  constructor(customerName, balance) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  widrow(amount) {
    this.balance -= amount;
  }
};

const gauravAccount = new BankAccount("Gaurav Str", 1000);

gauravAccount.deposit(500);
gauravAccount.widrow(1100);

console.log(gauravAccount);

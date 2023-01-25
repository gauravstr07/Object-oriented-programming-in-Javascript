function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  this.deposit = function (amount) {
    this.balance += amount;
  };

  this.widrow = function (amount) {
    this.balance -= amount;
  };
}

// const bankOfIndia = new BankAccount("Gaurav Sutar", 500);
// const stateBank = new BankAccount("Akshu GGL", 5000);

// bankOfIndia.deposit(2100);
// stateBank.deposit(1200);

// bankOfIndia.widrow(2000);
// stateBank.widrow(2000);

// console.log(bankOfIndia);
// console.log(stateBank);

/** Dom Manupilation */
const accounts = [];

/** account details */
const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");

/** deposite code */
const depositeForm = document.querySelector("#depositeForm");
const accountNumber = document.querySelector("#accountNumber");
const amount = document.querySelector("#amount");

/** account from */
accountForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const acount = new BankAccount(customerName.value, +balance.value);
  accounts.push(acount);
  console.log(accounts);
});

/** deposite form */
depositeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = accounts.find(
    (account) => account.accountNumber === +accountNumber.value
  );
  account.deposit(+amount.value);    
  console.log(accounts);
});

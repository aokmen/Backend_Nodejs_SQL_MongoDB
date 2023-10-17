class Person {
    constructor(name) {
      this.name = name;
    }
  
    sayName() {
      return this.name;
    }
  }
  
  class BankAccount extends Person {
    #balance;
  
    constructor(name, balance) {
      super(name);
      this.#balance = balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        return `Deposited ${amount} units. New balance: ${this.#balance}`;
      } else {
        return "Invalid deposit amount.";
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        return `Withdrawn ${amount} units. New balance: ${this.#balance}`;
      } else {
        return "Invalid withdrawal amount or insufficient balance.";
      }
    }
  
    balance() {
      return `Current balance: ${this.#balance}`;
    }
  }
  
  // Create a new BankAccount object
  const account = new BankAccount("John Doe", 1000);
  
  // Perform transactions
  console.log(account.sayName()); // Output: John Doe
  console.log(account.deposit(500)); // Output: Deposited 500 units. New balance: 1500
  console.log(account.withdraw(200)); // Output: Withdrawn 200 units. New balance: 1300
  console.log(account.balance()); // Output: Current balance: 1300
  